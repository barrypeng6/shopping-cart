import React from 'react';
import WishlistItem from './WishlistItem';

const Wishlist = ({ wishlistItems, handleDelete }) => (
  <div>
    追蹤清單
    <ul>
      {wishlistItems.map(wishlistItem =>
        <li key={wishlistItem.id}>
          <WishlistItem
            wishlistItem={wishlistItem}
            onDelete={handleDelete}
          />
        </li>
      )}
    </ul>
  </div>
);

Wishlist.propTypes = {
  wishlistItems: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  handleDelete: React.PropTypes.func.isRequired
};

export default Wishlist;
