import React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from './styled'

import { ReactComponent as Logo } from '../../assets/logo.svg'

import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon'

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(({ currentUser }) => (
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
			<CartIcon count={5}/>
		</Styled.Options>
	</Styled.Container>
))
