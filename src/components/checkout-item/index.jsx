import React from 'react'
import * as Styled from './styled'

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
	<Styled.Container>
		<Styled.ImageContainer>
			<Styled.Image alt="item" src={imageUrl}></Styled.Image>
		</Styled.ImageContainer>

		<span className="name">{name}</span>
		<span className="quantity">{quantity}</span>
		<span className="price">{price}</span>
        <div className="remove-button">&#10005;</div>
	</Styled.Container>
)

export default CheckoutItem
