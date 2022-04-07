import * as cocoSsd from '@tensorflow-models/coco-ssd';

const objectRecognition = async (img) => {
	const model = await cocoSsd.load();
	const predictions = await model.detect(img);
	return predictions;
};

export default objectRecognition;
