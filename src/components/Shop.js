import React from 'react';
import ProductContainer from '../containers/ProductContainer';
import CartContainer from '../containers/CartContainer';
import WishlistContainer from '../containers/WishlistContainer';

const Shop = () => (
  <div>
    <ProductContainer />
    <hr />
    <CartContainer />
    <hr />
    <WishlistContainer />
  </div>
);

export default Shop;
