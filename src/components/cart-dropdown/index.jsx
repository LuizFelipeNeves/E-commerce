import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import * as Styled from './styled'
import CustomButton from '../../components/custom-button'
import CartItem from '../../components/cart-item'
import { selectCartItems } from '../../redux/cart/selectors'
import { toggleCartHidden } from '../../redux/cart/actions'

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default withRouter(
	connect(mapStateToProps)(({ cartItems, history, dispatch }) => {
		return (
			<Styled.Container>
				<Styled.Items>
					{cartItems.length ? (
						cartItems.map((cartItem) => (
							<CartItem key={cartItem.id} item={cartItem} />
						))
					) : (
						<span className="empyty-message">Your cart is empyty</span>
					)}
				</Styled.Items>
				<CustomButton
					className="button-checkout"
					onClick={() => {
						history.push('/checkout')
						dispatch(toggleCartHidden())
					}}
				>
					GO TO CHECKOUT
				</CustomButton>
			</Styled.Container>
		)
	})
)
