import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css'

import Home from './pages/home'
import Shop from './pages/shop'
import SignInAndSignup from './pages/sign-in-and-signup'
import Header from './components/header'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/actions'

const mapStateToProps = ({ user: { currentUser } }) => ({
	currentUser
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
				<Route exact path="/shop" component={Shop} />
				<Route path="/shop/:categoryName" component={Shop} />
				<Route
					exact
					path="/signin"
					render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignup />)}
				/>
			</Switch>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
