import React from 'react';
import {useSelector} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import CartButton from 'components/CartButton';
import {RootState} from 'store';

const CartButtonContainer = () => {
  const productsInCart = useSelector((state: RootState) => state.cart.products);
  const numItems = productsInCart
    ? productsInCart.reduce((acc, val) => {
        acc = acc + val.quantity;
        return acc;
      }, 0)
    : 0;

  return <CartButton numItems={numItems} onPress={() => Actions.cart()} />;
};

export default CartButtonContainer;
