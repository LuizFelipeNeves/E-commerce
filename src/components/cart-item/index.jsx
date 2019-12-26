import React from 'react'
import { Container, Image, Details } from './styled'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<Container>
		<Image src={imageUrl} alt="item" />
		<Details>
			<span>{name}</span>
			<span>
				{quantity} x ${price}
			</span>
		</Details>
	</Container>
)

export default CartItem
