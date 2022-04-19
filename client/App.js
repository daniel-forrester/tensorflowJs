import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FuelEfficiency from './components/FuelEfficiency';
import MobileNet from './components/MobileNet';
import './style/index.scss';

const App = () => {
	return (
		<Router>
			<div className='container'>
				<h1>Welcome to TensorFlow</h1>
				<Routes>
					<Route exact path='/fuel_efficiency' element={<FuelEfficiency />} />
					<Route exact path='/mobilenet' element={<MobileNet />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
