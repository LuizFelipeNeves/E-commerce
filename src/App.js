import React, { useEffect, useCallback } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './App.css'

import Home from './pages/home'
import Shop from './pages/shop'
import SignInAndSignup from './pages/sign-in-and-signup'
import Checkout from './pages/checkout'

import Header from './components/header'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { setCurrentUserAction } from './redux/user/actions'
import { selectCurrentUser } from './redux/user/selectors'
export default () => {
	const dispatch = useDispatch()
	const currentUser = useSelector(selectCurrentUser)
	const setCurrentUser = useCallback(
		(user) => dispatch(setCurrentUserAction(user)),
		[dispatch]
	)

	useEffect(() => {
		auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth)
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({ id: snapShot.id, ...snapShot.data() })
				})
			} else setCurrentUser(userAuth)
		})
	}, [setCurrentUser])

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
