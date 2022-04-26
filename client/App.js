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
				<div className='mainHeader'>
					<img src={logo} className='logo'></img>
						<div className='link'>
							<a href='/fuel_efficiency'><br/>Regression Analysis Demo</a>
						</div>
						<div className='link'>
							<a href='/mobilenet'><br/>Image Recognition Demo</a>
						</div>

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
