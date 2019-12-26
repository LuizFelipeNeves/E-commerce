import React from 'react'
import { Container, LogoLink, OptionsContainer, OptionsLink } from './styled'

import { ReactComponent as Logo } from '../../assets/logo.svg'

import { useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/selectors'
import { selectCurrentUser } from '../../redux/user/selectors'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon'
import CardDropdown from '../cart-dropdown'

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

export default () => {
	const { currentUser, hidden } = useSelector(mapStateToProps)
	return (
		<Container>
			<LogoLink to="/" aria-label="Logo">
				<Logo />
			</LogoLink>
			<OptionsContainer>
				<OptionsLink to="/shop">
					SHOP
				</OptionsLink>
				{currentUser ? (
					<OptionsLink as='div' onClick={() => auth.signOut()}>
						SIGN OUT
					</OptionsLink>
				) : (
					<OptionsLink to="/signin">
						SIGN IN
					</OptionsLink>
				)}
				<CartIcon />
				{!hidden ? <CardDropdown /> : null}
			</OptionsContainer>
		</Container>
	)
}
