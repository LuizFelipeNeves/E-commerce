import React from 'react';
import Styled from './styled';
import { useSelector } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/selectors';
import CollectionPreview from '../preview-collection';

export default () => {
  const collections = useSelector(selectCollectionsForPreview);
  return (
    <Styled>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </Styled>
  );
};
