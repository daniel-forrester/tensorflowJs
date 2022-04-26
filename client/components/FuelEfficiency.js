import React from 'react';
import run from '../tensorflow/fuelEfficiency.js';

const FuelEfficiency = () => {
	run();
	return <div>
		<h2 className='fuelH2'>Fuel Efficiency Prediction Model</h2></div>;
};

export default FuelEfficiency;
