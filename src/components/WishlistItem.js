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

WishlistItem.propTypes = {
  wishlistItem: React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    price: React.PropTypes.number
  }).isRequired,
  onDelete: React.PropTypes.func.isRequired
};

export default WishlistItem;
