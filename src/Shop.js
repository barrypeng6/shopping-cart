import React from 'react';
import { Link } from 'react-router';
import ProductContainer from './ProductContainer';
import Home from './Home';

const Shop = ({ children }) => (
  <div>
    <nav>
      <Link to="/cart">Cart</Link> |
      <Link to="/wishlist"> Wishlist</Link>
    </nav>
    <ProductContainer />
    <hr />
    {children || <Home/>}
  </div>
);

export default Shop;
