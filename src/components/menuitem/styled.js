import styled, { css } from 'styled-components'

const Container = styled.div`
	min-width: 30%;
	height: 240px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;

	&.large {
		height: 380px;
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}
`

const Content = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	position: absolute;

	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}
`

const Title = styled.h1`
	font-weight: bold;
	margin: 0 6px 0;
	font-size: 22px;
	color: #4a4a4a;
`

const Subtitle = styled.span`
	font-weight: lighter;
	font-size: 16px;
`

const BackgroundImage = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;

	${(props) =>
		props.imageUrl &&
		css`
			background-image: url(${props.imageUrl});
		`}

	&:hover {
		cursor: pointer;
		transform: scale(1.1);
		transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
	}
`

export { Container, Content, Title, Subtitle, BackgroundImage }
