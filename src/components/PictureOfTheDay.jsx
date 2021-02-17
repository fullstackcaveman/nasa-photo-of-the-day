import React from 'react';

const Picture = ({ title, image, description, copyright, date }) => {
	return (
		<>
			<h1>{title}</h1>
			<img src={image} alt={title} />
			<p>{description}</p>
			<p>&copy; {copyright}</p>
			<p>Nasa Picture of the day on {date}</p>
		</>
	);
};

export default Picture;
