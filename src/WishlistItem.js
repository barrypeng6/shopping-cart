import React from 'react';

class WishlistItem extends React.Component {
  render() {
    const { wishlistItem, onDelete } = this.props;
    return (
      <div>
        {`${wishlistItem.name} - $${wishlistItem.price}`}
        <button onClick={() => onDelete(wishlistItem.id)}>移除</button>
      </div>
    );
  }
}

export default WishlistItem;
