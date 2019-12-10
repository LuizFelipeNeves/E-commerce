import React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from './styled'

import { ReactComponent as Logo } from '../../assets/logo.svg'

import { auth } from '../../firebase/firebase.utils'

export default ({ currentUser }) => (
	<Styled.Container>
		<Link to="/">
			<Styled.Logo>
				<Logo />
			</Styled.Logo>
		</Link>
		<Styled.Options>
			<Link to="/shop" className="option">
				SHOP
			</Link>
			<Link to="/contact" className="option">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link to="/signin" className="option">
					SIGN IN
				</Link>
			)}
		</Styled.Options>
	</Styled.Container>
)
