import React, { useState } from 'react';
import objectRecognition from '../tensorflow/hotdogOrNotHotdog';
import UploadImage from './UploadImage';

const HotdogOrNotHotdog = () => {
	const [prediction, setPrediction] = useState(null);
	return (
		<>
			<h3>Hotdog or Not Hotdog?</h3>
			<br />
			<br />
			<UploadImage />
			<br />
			<br />
			<button
				onClick={async () => {
					const pred = await objectRecognition(
						document.getElementById('targetImg')
					);
					setPrediction(pred[0].class);
				}}
			>
				Detect
			</button>
			<br />
			<br />
			<div>Prediction: {prediction ? prediction : 'No Result!'}</div>
		</>
	);
};

export default HotdogOrNotHotdog;
