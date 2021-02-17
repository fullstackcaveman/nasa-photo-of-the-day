import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { API_KEY, BASE_URL } from './constants';
import Picture from './components/PictureOfTheDay';

console.log(API_KEY);

function App() {
	const [picOfTheDay, setpicOfTheDay] = useState({});

	useEffect(() => {
		const getPicOfTheDay = () => {
			axios
				.get(`${BASE_URL}?api_key=${API_KEY}`)
				.then((res) => {
					setpicOfTheDay(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		getPicOfTheDay();
	}, []);

	return (
		<div className='App'>
			<Picture
				title={picOfTheDay.title}
				image={picOfTheDay.url}
				description={picOfTheDay.explanation}
				copyright={picOfTheDay.copyright}
				date={picOfTheDay.date}
			/>
		</div>
	);
}

export default App;
