import React from 'react';

class CartItem extends React.Component {
  render() {
    const { cartItem, onDelete, isSelected, onSelect, onAddToWishlist } = this.props;
    return (
      <div>
        <input
          type="checkbox"
          id={cartItem.id}
          checked={isSelected}
          onChange={() => onSelect(cartItem.id)}
        />
        <label
          htmlFor={cartItem.id}
        >{`${cartItem.name} x${cartItem.amount} = ${cartItem.price * cartItem.amount}`}</label>
        <button onClick={onDelete}>移除</button>
        <button onClick={onAddToWishlist}>加入追蹤清單</button>
      </div>
    );
  }
}

CartItem.propTypes = {
  cartItem: React.PropTypes.shape({
    id: React.PropTypes.number,
    itemId: React.PropTypes.number,
    name: React.PropTypes.string,
    price: React.PropTypes.number,
    amount: React.PropTypes.number
  }).isRequired,
  onDelete: React.PropTypes.func.isRequired,
  isSelected: React.PropTypes.bool.isRequired,
  onSelect: React.PropTypes.func.isRequired
};

export default CartItem;
