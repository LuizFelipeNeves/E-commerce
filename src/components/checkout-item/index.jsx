import React from 'react'
import * as Styled from './styled'
import { connect } from 'react-redux'
import { addItem, removeItem, clearItem } from '../../redux/cart/actions'

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
	clearItem: (item) => dispatch(clearItem(item))
})

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
	const { name, imageUrl, price, quantity } = cartItem
	return (
		<Styled.Container>
			<Styled.ImageContainer>
				<Styled.Image alt="item" src={imageUrl}></Styled.Image>
			</Styled.ImageContainer>

			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => clearItem(cartItem)}>
				&#10005;
			</div>
		</Styled.Container>
	)
}

export default connect(null, mapDispatchToProps)(CheckoutItem)
