import React from 'react';
import ProductContainer from '../containers/ProductContainer';
import CartContainer from '../containers/CartContainer';
import WishlistContainer from '../containers/WishlistContainer';
import * as ItemActions from '../actions/ItemActions';
import * as CartActions from '../actions/CartActions';
import * as WishlistActions from '../actions/WishlistActions';

class Shop extends React.Component {
  componentDidMount() {
    ItemActions.loadItems();
    CartActions.loadCartItems();
    WishlistActions.loadWishlistItems();
  }
  render() {
    return (
      <div>
        <ProductContainer />
        <hr />
        <CartContainer />
        <hr />
        <WishlistContainer />
      </div>
    );
  }
}

export default Shop;
