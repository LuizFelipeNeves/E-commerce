import styled from 'styled-components'
import CustomButton from '../custom-button';

const Container = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
	
	&:hover {
		.image {
			opacity: 0.8;
		}
		button {
			opacity: 0.85;
			display: flex;
		}
	}
`

const AddButton = styled(CustomButton)`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 255px;
	display: none;
`

const Image = styled.img`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`
const Footer = styled.h1`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`

const Name = styled.span`
	width: 90%;
	margin-bottom: 15px;
`

const Price = styled.span`
	width: 10%;
	text-align: right;
`

export { Container, AddButton, Image, Footer, Name, Price }
