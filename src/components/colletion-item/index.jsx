import React from 'react'
import * as Styled from './styled'
import CustomButton from '../custom-button'

export default ({ imageUrl, name, price }) => (
	<Styled.Container>
		<Styled.Image imageUrl={imageUrl}/>
		<Styled.Footer>
			<span className="name">{name}</span>
			<span className="price">{price}</span>
		</Styled.Footer>
		<CustomButton inverted onClick={() => console.log('item')}>Add to Cart</CustomButton>
	</Styled.Container>
)
