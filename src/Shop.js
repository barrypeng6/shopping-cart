import React from 'react';
import ProductContainer from './ProductContainer';
import CartContainer from './CartContainer';
import WishlistContainer from './WishlistContainer';

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
