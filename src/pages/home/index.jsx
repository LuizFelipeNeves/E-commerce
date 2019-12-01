import React from 'react'
import Homecontainer from '../../components/homecontainer'
import Directory from '../../components/directory'
import Menuitem from '../../components/menuitem'
import Sessions from './data'

const Home = () => (
	<Homecontainer>
		<Directory>
			{Sessions.map(({ id, title, size, imageUrl }) => (
				<Menuitem key={id} title={title} size={size} imageUrl={imageUrl} />
			))}
		</Directory>
	</Homecontainer>
)

export default Home
