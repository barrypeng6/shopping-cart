import React from 'react';
import Cart from '../components/Cart';
import * as CartActions from '../actions/CartActions';
import * as WishlistActions from '../actions/WishlistActions';
import CartStore from '../stores/CartStore';

class CartContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: CartStore.getAll()
    };
    this.getCartItems = this.getCartItems.bind(this);
  }
  componentWillMount() {
    CartStore.on('change', this.getCartItems);
  }
  componentWillUnmount() {
    CartStore.removeListener('change', this.getCartItems);
  }
  getCartItems() {
    this.setState({
      cartItems: CartStore.getAll()
    });
  }
  render() {
    return (
      <div>
        <Cart
          cartItems={this.state.cartItems}
          handleDelete={CartActions.deleteItem}
          handleDeleteSelected={CartActions.deleteSelected}
          handleAddToWishlist={WishlistActions.addToWishlist}
        />
      </div>
    );
  }
}

export default CartContainer;
