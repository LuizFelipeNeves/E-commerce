import React from 'react'
import * as Styled from './styled'

export default ({ imageUrl, name, price }) => (
	<Styled.Container>
		<Styled.Image imageUrl={imageUrl}/>
		<Styled.Footer>
			<span className='name' >{name}</span>
			<span className='price' >{price}</span>
		</Styled.Footer>
	</Styled.Container>
)
