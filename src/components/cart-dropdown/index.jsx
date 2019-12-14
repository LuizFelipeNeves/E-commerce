import React from 'react'
import { connect } from 'react-redux'

import * as Styled from './styled'
import CustomButton from '../../components/custom-button'
import CartItem from '../../components/cart-item'

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems
})

export default connect(mapStateToProps)(({ cartItems }) => (
	<Styled.Container>
		<Styled.Items>
			{cartItems.map((cartItem) => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
		</Styled.Items>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</Styled.Container>
))
