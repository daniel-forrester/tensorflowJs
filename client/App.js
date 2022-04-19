import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FuelEfficiency from './components/FuelEfficiency';
import MobileNet from './components/MobileNet';
import './style/index.scss';
import logo from './img/logo.svg';

const App = () => {
	return (
		<Router>
			<div className='container'>
				<img src={logo} className='logo'></img>
				<div className='link'>
					<a href='/fuel_efficiency'>Regression Analysis Demo</a>
				</div>
				<div className='link'>
					<a href='/mobilenet'>Image Recognition Demo</a>
				</div>
				<Routes>
					<Route exact path='/fuel_efficiency' element={<FuelEfficiency />} />
					<Route exact path='/mobilenet' element={<MobileNet />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
