import React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from './styled'

import { ReactComponent as Logo } from '../../assets/logo.svg'

export default () => (
	<Styled.Container>
		<Link to="/">
			<Styled.Logo>
				<Logo />
			</Styled.Logo>
		</Link>
		<Styled.Options>
			<Link to="/shop" className='option' >SHOP</Link>
			<Link to="/contact" className='option' >CONTACT</Link>
		</Styled.Options>
	</Styled.Container>
)
