import React from 'react';
import run from '../tensorflow/tensorflow.js';

const Recommendation = () => {
	run();
	return (
		<>
			<div>Hello TensorFlow!</div>;
		</>
	);
};

export default Recommendation;
