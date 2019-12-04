import React, { useEffect, useState } from 'react'
import ShopData from './data'
import PreviewColletion from '../../components/preview-colletion'

export default () => {
	const [colletions, setcolletions] = useState([])

	useEffect(() => {
		setcolletions(ShopData)
	}, [])

	return (
		<div>
			{colletions.map(({id, ...otherprops}) => (
				<PreviewColletion  key={id} {...otherprops}/>
			))}
		</div>
	)
}
