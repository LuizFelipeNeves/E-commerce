import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Home from './pages/home'
import Shop from './pages/shop'

const App = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/shop" component={Shop} />
			</Switch>
		</div>
	)
}

export default App
