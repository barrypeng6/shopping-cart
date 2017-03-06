import React from 'react';
import WishlistItem from './WishlistItem';
import WishlistStore from './stores/WishlistStore';
import * as WishlistActions from './actions/WishlistActions';

class Wishlist extends React.Component {
  constructor() {
    super();
    this.state = {
      wishlistItems: WishlistStore.getAll()
    };
    this.getWishlistItems = this.getWishlistItems.bind(this);
  }
  componentWillMount() {
    WishlistStore.on('change', this.getWishlistItems);
  }
  componentWillUnmount() {
    WishlistStore.removeListener('change', this.getWishlistItems);
  }
  getWishlistItems() {
    this.setState({
      wishlistItems: WishlistStore.getAll()
    });
  }
  render() {
    return (
      <div>
        追蹤清單
        <ul>
          {
            this.state.wishlistItems.map(wishlistItem =>
              <li key={wishlistItem.id}>
                <WishlistItem
                  wishlistItem={wishlistItem}
                  onDelete={WishlistActions.deleteItem}
                />
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default Wishlist;
