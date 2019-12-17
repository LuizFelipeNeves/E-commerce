import React from 'react'
import Homecontainer from '../../components/homecontainer'
import Directory from '../../components/directory'

const Home = ({history, match}) => (
	<Homecontainer>
		<Directory history={history} match={match}/>
	</Homecontainer>
)

export default Home
