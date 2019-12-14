import React from 'react'
import * as Styled from './styled'
import CustomButton from '../custom-button'

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/actions'

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item))
})

const Colletion = ({ item, addItem }) => {
	const { id, name, price, imageUrl } = item
	return (
		<Styled.Container key={id}>
			<Styled.Image imageUrl={imageUrl} />
			<Styled.Footer>
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</Styled.Footer>
			<CustomButton inverted onClick={() => addItem(item)}>
				Add to Cart
			</CustomButton>
		</Styled.Container>
	)
}

export default connect(null, mapDispatchToProps)(Colletion)
