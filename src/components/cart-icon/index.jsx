import React from 'react'
import * as Styled from './styled'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({ cart: { cartItems } }) => ({
	itemCount: cartItems.reduce((acc, item) => acc + item.quantity, 0)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(({ itemCount, toggleCartHidden }) => (
	<Styled.Container onClick={toggleCartHidden}>
		<ShoppingIcon width="24px" height="24px" />
		<Styled.Count>{itemCount}</Styled.Count>
	</Styled.Container>
))
