import React from 'react'
import * as Styled from './styled'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/actions'
import { selectCartItemsCount } from '../../redux/cart/selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount
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
