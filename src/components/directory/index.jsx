import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/selectors'

import Styled from './styled'
import Menuitem from '../menuitem'

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
})

export default connect(mapStateToProps)(({ history, match, sections }) => (
	<Styled>
		{sections.map(({ id, ...otherprops }) => (
			<Menuitem key={id} {...otherprops} history={history} match={match} />
		))}
	</Styled>
))
