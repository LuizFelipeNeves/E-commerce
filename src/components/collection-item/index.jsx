import React from 'react';
import { Container, AddButton, Image, Footer, Name, Price } from './styled';

import { useDispatch } from 'react-redux';
import { addItemAction } from '../../redux/cart/actions';

const Collection = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const addItem = item => dispatch(addItemAction(item));
  return (
    <Container>
      <Image imageUrl={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <AddButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </AddButton>
    </Container>
  );
};

export default Collection;
