import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/selectors'

import Styled from './styled'
import MenuItem from '../menu-item'

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
})

export default connect(mapStateToProps)(({ sections }) => (
	<Styled>
		{sections.map(({ id, ...otherProps }) => (
			<MenuItem key={id} {...otherProps} />
		))}
	</Styled>
))
