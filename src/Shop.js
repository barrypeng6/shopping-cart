import React from 'react';
import ItemsList from './ItemsList';
import Cart from './Cart';
import Wishlist from './Wishlist';
import ItemStore from './stores/ItemStore';
import * as CartActions from './actions/CartActions';
import * as WishlistActions from './actions/WishlistActions';

class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      items: ItemStore.getAll()
    };
  }
  render() {
    return (
      <div>
        <ItemsList
          onSubmit={CartActions.addToCart}
          onAddToWishlist={WishlistActions.addToWishlist}
          items={this.state.items}
        />
        <hr />
        <Cart
          handleDelete={CartActions.deleteItem}
          handleDeleteSelected={CartActions.deleteSelected}
          handleAddToWishlist={WishlistActions.addToWishlist}
        />
        <hr />
        <Wishlist />
      </div>
    );
  }
}

export default Shop;
