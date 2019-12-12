import styled from 'styled-components'

const Container = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`

const Count = styled.span`
	position: absolute;
	font-size: 10px;
	font-weight: bold;
	bottom: 12px;
`

export { Container, Count }
