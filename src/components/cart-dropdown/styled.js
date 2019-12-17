import styled from 'styled-components'

const Container = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;

	.button-checkout {
		margin-top: auto;
	}

	.empyty-message {
		font-size: 18px;
		margin: 50px auto;
	}
`

const Items = styled.li`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: scroll;
`

export { Container, Items }
