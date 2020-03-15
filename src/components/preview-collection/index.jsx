import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Title, Preview } from './styled';

import CollectionItem from '../collection-item';

export default withRouter(({ title, items, history, match, routeName }) => (
  <Container>
    <Title onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</Title>
    <Preview>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Preview>
  </Container>
));
