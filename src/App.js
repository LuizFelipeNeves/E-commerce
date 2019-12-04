import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Home from './pages/home'
import Shop from './pages/shop'
import Header from './components/header'

const App = () => {
	return (
		<div>
			<Header/>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/shop" component={Shop} />
				<Route path="/shop/:categoryName" component={Shop} />
			</Switch>
		</div>
	)
}

export default App
