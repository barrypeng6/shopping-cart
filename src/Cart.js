import React from 'react';
import CartItemsList from './CartItemsList';
import CartStore from './stores/CartStore';

class Cart extends React.Component {
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
    const { handleDelete, handleDeleteSelected, handleAddToWishlist } = this.props;
    return (
      <div>
        購物車
        <CartItemsList
          onDelete={handleDelete}
          onDeleteSelected={handleDeleteSelected}
          cartItems={this.state.cartItems}
          addToWishlist={handleAddToWishlist}
        />
      </div>
    );
  }
}

Cart.propTypes = {
  handleDelete: React.PropTypes.func.isRequired,
  handleDeleteSelected: React.PropTypes.func.isRequired
};

export default Cart;
