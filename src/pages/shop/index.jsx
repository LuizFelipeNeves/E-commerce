import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {  selectColletions } from '../../redux/shop/selectors'

import PreviewColletion from '../../components/preview-colletion'

const mapStateToProps = createStructuredSelector({
	colletions:  selectColletions
})

export default connect(mapStateToProps)(({ colletions }) => (
	<div>
		{colletions.map(({ id, ...otherprops }) => (
			<PreviewColletion key={id} {...otherprops} />
		))}
	</div>
))
