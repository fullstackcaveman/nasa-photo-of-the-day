import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { API_KEY, BASE_URL } from './constants';
import Picture from './components/PictureOfTheDay';

console.log(API_KEY);

function App() {
	const [picture, setPicture] = useState({});

	useEffect(() => {
		const getPictures = () => {
			axios
				.get(`${BASE_URL}?api_key=${API_KEY}`)
				.then((res) => {
					setPicture(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		getPictures();
	}, []);

	return (
		<div className='App'>
			<Picture
				title={picture.title}
				image={picture.url}
				description={picture.explanation}
				copyright={picture.copyright}
				date={picture.date}
			/>
		</div>
	);
}

export default App;
