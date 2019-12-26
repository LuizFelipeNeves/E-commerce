import React from 'react'
import {
	Container,
	HeaderContainer,
	HeaderBlockContainer,
	Total,
	Warning
} from './styled'
import { selectCartItems, selectCartTotal } from '../../redux/cart/selectors'
import { useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item'
import StripeCheckoutButton from '../../components/stripe-button'

const tableHeader = ['Product ', 'Description', 'Quantity', 'Price', 'Remove']

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartTotal: selectCartTotal
})

export default () => {
	const { cartItems, cartTotal } = useSelector(mapStateToProps)
	return (
		<Container>
			<HeaderContainer>
				{tableHeader.map((item, index) => (
					<HeaderBlockContainer key={index}>
						<span>{item}</span>
					</HeaderBlockContainer>
				))}
			</HeaderContainer>
			{cartItems.map((cartItem, index) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<Total>
				<span>TOTAL: ${cartTotal}</span>
			</Total>
			<Warning>
				*Please use the following test credit card for payments*
				<br />
				4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
			</Warning>
			<StripeCheckoutButton price={cartTotal} />
		</Container>
	)
}
