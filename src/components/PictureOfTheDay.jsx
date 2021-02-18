import React from 'react';
import styled from 'styled-components';
import SocialBar from './SocialBar';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	.socialBar {
		margin-top: 50px;
	}
`;

const H1 = styled.h1`
	font-size: 3rem;
	font-weight: bold;
	margin: 30px auto;
`;

const Description = styled.div`
	margin: 10px auto 30px;
	padding: 10px;
	font-size: 1.3rem;
	width: 1024px;
`;

const Info = styled.div`
	/*  */
`;

const Picture = ({ title, image, description, copyright, date }) => {
	return (
		<Container>
			<H1>
				{title} - {copyright}
			</H1>
			<img src={image} alt={title} />
			<SocialBar className='socialBar' />
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
