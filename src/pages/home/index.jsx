import React from 'react'
import Homecontainer from '../../components/homecontainer'
import Directory from '../../components/directory'
import Sessions from './data'

const Home = ({history, match}) => (
	<Homecontainer>
		<Directory history={history} match={match} sessions={Sessions}/>
	</Homecontainer>
)

export default Home
