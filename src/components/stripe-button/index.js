import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import config from './config'

const MountConfig = (price) => ({
	...config,
	description: `Your total is $${price}`,
	amount: price * 100,
	stripeKey: 'pk_test_zcsakOhhbyra327BQvn4Ghll0055m2lUJc'
})

const OnPayment = (token) => {
	console.log(token)
	alert('Payment Succesful!')
}

export default ({ price }) => (
	<StripeCheckout {...MountConfig(price)} token={OnPayment} />
)
