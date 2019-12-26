import React, { Fragment }from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview'
import CollectionPage from '../colletion'

const ShopPage = ({ match }) => (
	<Fragment>
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
	</Fragment>
)

export default ShopPage
