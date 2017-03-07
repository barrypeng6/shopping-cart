import React from 'react';
import CartList from './CartList';

const Cart = ({ cartItems, handleDelete, handleDeleteSelected, handleAddToWishlist }) => (
  <div>
    購物車
    <CartList
      cartItems={cartItems}
      onDelete={handleDelete}
      onDeleteSelected={handleDeleteSelected}
      addToWishlist={handleAddToWishlist}
    />
  </div>
);

Cart.propTypes = {
  cartItems: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  handleDelete: React.PropTypes.func.isRequired,
  handleDeleteSelected: React.PropTypes.func.isRequired,
  handleAddToWishlist: React.PropTypes.func.isRequired
};

export default Cart;
