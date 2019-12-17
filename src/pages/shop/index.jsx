import React from 'react'
import ShopData from './data'

import PreviewColletion from '../../components/preview-colletion'

export default (props) => {
	const category = props.match.params.categoryName
	const colletions = category ? ShopData.filter(e => e.routeName === category): ShopData

	return (
		<div>
			{colletions.map(({id, ...otherprops}) => (
				<PreviewColletion  key={id} {...otherprops}/>
			))}
		</div>
	)
}
