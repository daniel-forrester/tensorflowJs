import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recommendation from './components/Recommendation';
import MobileNet from './components/MobileNet';

const App = () => {
	return (
		<Router>
			<div className='container'>
				<h1>Is it a hotdog?</h1>
				<Routes>
					<Route exact path='/' element={<Recommendation />} />
					<Route exact path='/mobilenet' element={<MobileNet />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
