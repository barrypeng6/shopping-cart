import React from 'react';
import CartItem from './CartItem';

class CartItemsList extends React.Component {
  constructor() {
    super();
    this.state = {
      isSelectAll: false, // 是否有全選
      selectedItem: []  // 已選擇的項目id
    };
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleSelect(id) {
    // 負責處理單一項目選取事件
    if (this.state.selectedItem.find(sid => sid === id)) {
      // 取消選取
      this.setState({
        isSelectAll: false,
        selectedItem: this.state.selectedItem.filter(sid => sid !== id)
      });
    } else {
      // 選取
      let all = false;
      if (this.props.cartItems.length - this.state.selectedItem.length === 1) {
      // 如果剩一個為選取時，選取後isSelectAll=true
        all = true;
      }
      this.setState({
        isSelectAll: all,
        selectedItem: this.state.selectedItem.concat(id)
      });
    }
  }
  handleDelete(id) {
    // 負責處理單一項目刪除事件
    if (this.state.selectedItem.filter(sid => sid !== id).length === 0) {
      // 如果購物車項目數為零，全選取消
      this.setState({
        isSelectAll: false,
        selectedItem: this.state.selectedItem.filter(sid => sid !== id)
      });
    } else {
      // 如果購物車項目數不為零，只去除被刪除之項目id
      this.setState({
        selectedItem: this.state.selectedItem.filter(sid => sid !== id)
      });
    }
  }
  handleSelectAll() {
    // 負責處理全選事件
    if (this.props.cartItems.length === this.state.selectedItem.length
      && this.state.isSelectAll === true) {
      this.setState({
        isSelectAll: !this.state.isSelectAll,
        selectedItem: []
      });
    } else {
      this.setState({
        isSelectAll: !this.state.isSelectAll,
        selectedItem: [].concat(this.props.cartItems.map(item => item.id))
      });
    }
  }
  render() {
    const { cartItems, onDelete, onDeleteSelected, addToWishlist } = this.props;
    return (
      <div>

        <input
          type="checkbox"
          id="all"
          disabled={cartItems.length === 0}
          checked={this.state.isSelectAll}
          onChange={this.handleSelectAll}
        />
        <label htmlFor="all">All</label>

        <button
          disabled={this.state.selectedItem.length === 0}
          onClick={() => {
            this.setState({
              isSelectAll: false,
              selectedItem: []
            });
            return onDeleteSelected(this.state.selectedItem);
          }}
        >移除已選項目</button>

        <ul>
          { cartItems.map(cartItem =>
            <li key={cartItem.id}>
              <CartItem
                onDelete={() => {
                  this.handleDelete(cartItem.id);
                  return onDelete(cartItem.id);
                }}
                cartItem={cartItem}
                isSelected={Boolean(this.state.selectedItem.find(id => id === cartItem.id))}
                onSelect={this.handleSelect}
                isSelectAll={this.state.isSelectAll}
                onAddToWishlist={() => addToWishlist(
                  {
                    id: cartItem.itemId,
                    name: cartItem.name,
                    price: cartItem.price
                  }
                )}
              />
            </li>
          )}
        </ul>

      </div>
    );
  }
}

CartItemsList.propTypes = {
  cartItems: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onDelete: React.PropTypes.func.isRequired,
  onDeleteSelected: React.PropTypes.func.isRequired,
  addToWishlist: React.PropTypes.func.isRequired
};

export default CartItemsList;
