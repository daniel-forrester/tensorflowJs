import React from 'react';
import run from '../tensorflow/fuelEfficiency.js';

const FuelEfficiency = () => {
	run();
	return <div>Fuel Efficiency Prediction Model</div>;
};

export default FuelEfficiency;
