import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	max-width: 1024px;
`;

const H1 = styled.h1`
	font-size: 2rem;
	font-weight: bold;
	margin: 10px auto;
`;

const Description = styled.div`
	margin: 10px auto 30px;
	padding: 10px;
	font-size: 1.2rem;
`;

const Info = styled.div`
	/*  */
`;

const Picture = ({ title, image, description, copyright, date }) => {
	return (
		<Container>
			<H1>{title}</H1>
			<img src={image} alt={title} />
			<Description>{description}</Description>
			<Info>
				<p>&copy; {copyright}</p>
				<p>Source: Nasa Picture of the day</p>
				<p>Date: {date}</p>
			</Info>
		</Container>
	);
};

export default Picture;
