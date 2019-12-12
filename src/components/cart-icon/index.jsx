import React from 'react'
import * as Styled from './styled'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(({ count = 0, toggleCartHidden }) => (
	<Styled.Container onClick={toggleCartHidden}>
		<ShoppingIcon width="24px" height="24px" />
		<Styled.Count>{count}</Styled.Count>
	</Styled.Container>
))
