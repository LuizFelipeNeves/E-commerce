import React from 'react'
import * as Styled from './styled'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<Styled.Container>
		<Styled.Image src={imageUrl} alt="item" />
		<Styled.Details>
			<span className="name">{name}</span>
			<span className="price">
				{quantity} x ${price}
			</span>
		</Styled.Details>
	</Styled.Container>
)

export default CartItem
