import React from 'react'
import { useSelector } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/selectors'

import Styled from './styled'
import MenuItem from '../menu-item'

export default () => {
	const sections = useSelector(selectDirectorySections)
	return (
		<Styled>
			{sections.map(({ id, ...otherProps }) => (
				<MenuItem key={id} {...otherProps} />
			))}
		</Styled>
	)
}
