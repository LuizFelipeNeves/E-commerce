import React from 'react'
import {
	Container,
	ImageContainer,
	TextContainer,
	QuantityContainer,
	RemoveButtonContainer
} from './styled'
import { useDispatch } from 'react-redux'
import { addItemAction, removeItemAction, clearItemAction } from '../../redux/cart/actions'


export default ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem

	const dispatch = useDispatch()
	const addItem = (item) => dispatch(addItemAction(item))
	const removeItem = (item) => dispatch(removeItemAction(item))
	const clearItem =  (item) => dispatch(clearItemAction(item))

	return (
		<Container>
			<ImageContainer>
				<img alt="item" src={imageUrl}></img>
			</ImageContainer>

			<TextContainer>{name}</TextContainer>
			<QuantityContainer>
				<div onClick={() => removeItem(cartItem)}>&#10094;</div>
				<span>{quantity}</span>
				<div onClick={() => addItem(cartItem)}>&#10095;</div>
			</QuantityContainer>
			<TextContainer>{price}</TextContainer>
			<RemoveButtonContainer onClick={() => clearItem(cartItem)}>
				&#10005;
			</RemoveButtonContainer>
		</Container>
	)
}
