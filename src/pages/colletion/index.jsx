import React from 'react'
import { Container, Title, ItemsContainer } from './styled'
import { useSelector } from 'react-redux'

import CollectionItem from '../../components/colletion-item'

import { selectCollection } from '../../redux/shop/selectors'

const CollectionPage = ({ match }) => {
	const { title, items } = useSelector((state) =>
		selectCollection(match.params.collectionId)(state)
	)
	return (
		<Container>
			<Title>{title}</Title>
			<ItemsContainer>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</ItemsContainer>
		</Container>
	)
}

export default CollectionPage
