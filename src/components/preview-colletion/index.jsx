import React from 'react'
import * as Styled from './styled'

import ColletionItem from '../colletion-item'

export default ({ title, items }) => (
	<Styled.Container>
		<Styled.Title>{title.toUpperCase()}</Styled.Title>
		<Styled.Preview>
			{items
				.filter((item, idx) => idx < 4)
				.map(({id, ...otherprops}) => <ColletionItem key={id} {...otherprops}/>)}
		</Styled.Preview>
	</Styled.Container>
)
