import React, { Fragment, useEffect, useCallback }from 'react'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview'
import CollectionPage from '../colletion'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollectionsAction  } from '../../redux/shop/actions'

const ShopPage = ({ match }) => {
	const dispatch = useDispatch()

	const updateCollections = useCallback(
		(collectionsMap) => dispatch(updateCollectionsAction(collectionsMap)),
		[dispatch]
	)

	useEffect(() => {
		const collectionsRef = firestore.collection('collections')
		collectionsRef.onSnapshot(async snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
			updateCollections(collectionsMap)
		})
	}, [updateCollections])
	return (
		<Fragment>
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</Fragment>
	)
}

export default ShopPage
