import React from 'react';
import Wishlist from '../components/Wishlist';
import WishlistStore from '../stores/WishlistStore';
import * as WishlistActions from '../actions/WishlistActions';

class WishlistContainer extends React.Component {
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
        <Wishlist
          wishlistItems={this.state.wishlistItems}
          handleDelete={WishlistActions.deleteItem}
        />
      </div>
    );
  }
}

export default WishlistContainer;
