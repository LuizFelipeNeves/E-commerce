import React from 'react'
import * as Styled from './styled'

import ColletionItem from '../colletion-item'

export default ({ id, title, items }) => (
	<Styled.Container>
		<Styled.Title>{title.toUpperCase()}</Styled.Title>
		<Styled.Preview>
			{items
				.filter((item, idx) => idx < 4)
				.map((item) => (
					<ColletionItem key={item.id} item={item} />
				))}
		</Styled.Preview>
	</Styled.Container>
)
