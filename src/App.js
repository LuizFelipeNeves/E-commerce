import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Home from './pages/home'
import Shop from './pages/shop'
import SignInAndSignup from './pages/sign-in-and-signup'
import Header from './components/header'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

const App = () => {
	const [currentUser, setcurrentUser] = useState(null)
	useEffect(() => auth.onAuthStateChanged(async userAuth => {
		if(userAuth) {
			const userRef = await createUserProfileDocument(userAuth)
			userRef.onSnapshot(snapShot => {
				setcurrentUser({ id: snapShot.id, ...snapShot.data() })
			})
		}
		setcurrentUser(userAuth)
 	}), [])
	
	return (
		<div>
			<Header currentUser={currentUser}/>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/shop" component={Shop} />
				<Route path="/shop/:categoryName" component={Shop} />
				<Route path='/signin' component={SignInAndSignup}/>
			</Switch>
		</div>
	)
}

export default App
