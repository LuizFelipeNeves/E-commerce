import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;

	.name,
	.quantity,
	.price {
		width: 23%;
	}

	.quantity {
		padding-left: 20px;
	}

	.remove-button {
		padding-left: 12px;
		cursor: pointer;
	}
`

const ImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;
`

const Image = styled.img`
	width: 100%;
	height: 100%;
`

export { Container, ImageContainer, Image }
