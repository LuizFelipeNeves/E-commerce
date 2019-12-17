import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css'

import Home from './pages/home'
import Shop from './pages/shop'
import SignInAndSignup from './pages/sign-in-and-signup'
import Checkout from './pages/checkout'

import Header from './components/header'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/actions'
import { selectCurrentUser } from './redux/user/selectors'

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

const App = ({ setCurrentUser, currentUser }) => {
	auth.onAuthStateChanged(async (userAuth) => {
		if (userAuth) {
			const userRef = await createUserProfileDocument(userAuth)
			userRef.onSnapshot((snapShot) => {
				setCurrentUser({ id: snapShot.id, ...snapShot.data() })
			})
		}
		setCurrentUser(userAuth)
	})

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/shop" component={Shop} />
				<Route exact path="/checkout" component={Checkout} />
				<Route
					exact
					path="/signin"
					render={() =>
						currentUser ? <Redirect to="/" /> : <SignInAndSignup />
					}
				/>
			</Switch>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
