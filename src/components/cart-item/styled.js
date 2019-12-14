import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	display: flex;
	height: 80px;
	margin-bottom: 15px;
`

const Image = styled.img`
	width: 30%;
`
const Details = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 10px 20px;

	.name {
		font-size: 16px;
	}
`

export { Container, Image, Details }
