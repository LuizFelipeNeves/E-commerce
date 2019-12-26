import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Container, Items, EmptyMessage, ButtonCheckout } from './styled'
import CartItem from '../../components/cart-item'
import { selectCartItems } from '../../redux/cart/selectors'
import { toggleCartHiddenAction } from '../../redux/cart/actions'

export default withRouter(({ history }) => {
	const dispatch = useDispatch()
	const cartItems = useSelector(selectCartItems)
	return (
		<Container>
			<Items>
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<EmptyMessage>Your cart is empyty</EmptyMessage>
				)}
			</Items>
			<ButtonCheckout
				onClick={() => {
					history.push('/checkout')
					dispatch(toggleCartHiddenAction())
				}}
			>
				GO TO CHECKOUT
			</ButtonCheckout>
		</Container>
	)
})
