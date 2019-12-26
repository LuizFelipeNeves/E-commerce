import React from 'react'
import { Container, BackgroundImage, Content, Title, Subtitle } from './styled'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<Container size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<BackgroundImage imageUrl={imageUrl} />
		<Content>
			<Title>{title.toUpperCase()}</Title>
			<Subtitle>SHOP NOW</Subtitle>
		</Content>
	</Container>
)

export default withRouter(MenuItem)
