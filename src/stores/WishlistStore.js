import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class WishlistStore extends EventEmitter {
  constructor() {
    super();
    this.wishlistItems = [
      {
        id: 1,
        name: 'apple',
        price: 20
      }
    ];
  }
  addToWishlist(item) {
    if (this.wishlistItems.find(wishlistItem => wishlistItem.id === item.id)) {
      alert('已加入追蹤清單');
    } else {
      this.wishlistItems = this.wishlistItems.concat(item);
    }
    this.emit('change');
  }
  deleteItem(id) {
    this.wishlistItems = this.wishlistItems.filter(wishlistItem => wishlistItem.id !== id);
    this.emit('change');
  }
  getAll() {
    return this.wishlistItems;
  }
  handleActions(action) {
    switch (action.type) {
      case 'ADD_TO_WISHLIST':
        this.addToWishlist(action.item);
        break;
      case 'DELETE_WISHLIST_ITEM':
        this.deleteItem(action.id);
        break;
      default: break;
    }
  }
}

const wishlistStore = new WishlistStore();

dispatcher.register(wishlistStore.handleActions.bind(wishlistStore));

export default wishlistStore;
