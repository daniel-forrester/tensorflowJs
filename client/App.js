import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FuelEfficiency from './components/FuelEfficiency';
import HotdogOrNotHotdog from './components/HotdogOrNotHotdog';

const App = () => {
	return (
		<Router>
			<div className='container'>
				<h1>Welcome to TensorFlow</h1>
				<Routes>
					<Route exact path='/fuel_efficiency' element={<FuelEfficiency />} />
					<Route exact path='/hotdog' element={<HotdogOrNotHotdog />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
