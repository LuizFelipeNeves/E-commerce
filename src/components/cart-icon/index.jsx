import React from 'react'
import * as Styled from './styled'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

export default ({ count }) => (
	<Styled.Container>
		<ShoppingIcon width="24px" height="24px" />
		<Styled.Count>{count}</Styled.Count>
	</Styled.Container>
)
