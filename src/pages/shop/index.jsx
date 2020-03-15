import React, { Fragment, useEffect, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview';
import CollectionPage from '../collection';
import WithSpinner from '../../components/with-spinner';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollectionsAction } from '../../redux/shop/actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const updateCollections = useCallback(
    collectionsMap => dispatch(updateCollectionsAction(collectionsMap)),
    [dispatch]
  );

  useEffect(() => {
    const collectionsRef = firestore.collection('collections');
    collectionsRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setIsLoading(false);
    });
  }, [updateCollections]);
  return (
    <Fragment>
      <Route
        exact
        path={`${match.path}`}
        render={props => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
      />
    </Fragment>
  );
};

export default ShopPage;
