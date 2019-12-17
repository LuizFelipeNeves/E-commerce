import styled, { css } from 'styled-components'

const Container = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	button {
		width: 80%;
		opacity: 0.7;
		position: absolute;
		top: 255px;
		display: none;
	}

	&:hover {
		button {
			opacity: 0.85;
			display: flex;
		}
	}
`

const Image = styled.img`
	width: 100%;
	height: 95%;
	margin-bottom: 5px;

	&:hover {
		opacity: 0.8;
	}

	background-size: cover;
	background-position: center;
	${(props) =>
		props.imageUrl &&
		css`
			background-image: url(${props.imageUrl});
		`}
`
const Footer = styled.h1`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;

	.name {
		width: 90%;
		margin-bottom: 15px;
	}

	.price {
		width: 10%;
	}
`

export { Container, Image, Footer }
