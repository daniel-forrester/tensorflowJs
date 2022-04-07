const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

/**
 * Middlewares
 */
// Handle cross origin
app.use(cors());

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Statically serve everything in the build folder on the route '/build'
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));

  // Serve index.html on the route '/'
  app.use('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * Start server
 */
app.listen(PORT, () => {
  console.log(`Server is running on the server ${PORT}`);
});
