import React from 'react'
import * as Styled from './styled'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/selectors'
import { connect } from 'react-redux'
import CheckoutItem from '../../components/checkout-item'
import StripeCheckoutButton from '../../components/stripe-button'

const tableHeader = ['Product ', 'Description', 'Quantity', 'Price', 'Remove']

const Checkout = ({ cartItems, cartTotal }) => (
	<Styled.Container>
		<Styled.Header>
			{tableHeader.map((item, index) => (
				<div key={index} className="header-block">
					<span>{item}</span>
				</div>
			))}
		</Styled.Header>
		{cartItems.map((cartItem, index) => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<Styled.Total>
			<span>TOTAL: ${cartTotal}</span>
		</Styled.Total>
		<Styled.TestWarning>
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
		</Styled.TestWarning>
		<StripeCheckoutButton price={cartTotal} />
	</Styled.Container>
)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)
