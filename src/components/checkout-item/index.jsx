import React from 'react'
import * as Styled from './styled'
import { connect } from 'react-redux'
import { removeItem } from '../../redux/cart/actions'

const mapDispatchToProps = (dispatch) => ({
	removeItem: (item) => dispatch(removeItem(item))
})

const CheckoutItem = ({ cartItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem
	return (
		<Styled.Container>
			<Styled.ImageContainer>
				<Styled.Image alt="item" src={imageUrl}></Styled.Image>
			</Styled.ImageContainer>

			<span className="name">{name}</span>
			<span className="quantity">{quantity}</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => removeItem(cartItem)}>
				&#10005;
			</div>
		</Styled.Container>
	)
}

export default connect(null, mapDispatchToProps)(CheckoutItem)
