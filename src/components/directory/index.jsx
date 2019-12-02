import React from 'react'
import Styled from './styled'
import Menuitem from '../menuitem'

export default ({ history, match, sessions }) => (
	<Styled>
		{sessions.map(({ id, ...otherprops }) => (
				<Menuitem key={id} {...otherprops} history={history} match={match}/>
			))}
	</Styled>
)