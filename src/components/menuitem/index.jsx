import React from 'react'
import * as Styled from './styled'

export default ({ title, size, imageUrl, history, linkUrl, match }) => (
	<Styled.Container className={`${size ? size : ''}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<Styled.BackgroundImage imageUrl={imageUrl} />
		<Styled.Content>
			<Styled.Title>{title.toUpperCase()}</Styled.Title>
			<Styled.Subtitle>SHOP NOW</Styled.Subtitle>
		</Styled.Content>
	</Styled.Container>
)
