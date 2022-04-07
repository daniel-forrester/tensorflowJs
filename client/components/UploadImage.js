import React, { useState } from 'react';

const UploadImage = () => {
	const [image, setImage] = useState(null);

	return (
		<div>
			<input
				type='file'
				name='img'
				onChange={(event) => {
					setImage(event.target.files[0]);
				}}
			/>
			{image && (
				<>
					<div>
						<img
							id='targetImg'
							width={'500px'}
							src={URL.createObjectURL(image)}
						/>
					</div>

					<button onClick={() => setImage(null)}>Remove</button>
				</>
			)}
		</div>
	);
};

export default UploadImage;
