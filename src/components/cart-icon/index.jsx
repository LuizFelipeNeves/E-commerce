import React from 'react'
import { Container, Count, ShoppingIcon } from './styled'
import { useSelector, useDispatch } from 'react-redux'

import { toggleCartHiddenAction } from '../../redux/cart/actions'
import { selectCartItemsCount } from '../../redux/cart/selectors'

export default () => {
	const dispatch = useDispatch()
	
	const toggleCartHidden = () => dispatch(toggleCartHiddenAction())

	const itemCount = useSelector(selectCartItemsCount)

	return (
		<Container onClick={toggleCartHidden}>
			<ShoppingIcon width="24px" height="24px" />
			<Count>{itemCount}</Count>
		</Container>
	)
}
