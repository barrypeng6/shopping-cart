import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class WishlistStore extends EventEmitter {
  constructor() {
    super();
    this.wishlistItems = [];
  }
  addToWishlist(item) {
    if (this.wishlistItems.find(wishlistItem => wishlistItem.id === item.id)) {
      alert('已加入追蹤清單');
    } else {
      this.wishlistItems = this.wishlistItems.concat(item);
    }
  }
  deleteItem(id) {
    this.wishlistItems = this.wishlistItems.filter(wishlistItem => wishlistItem.id !== id);
  }
  getAll() {
    return this.wishlistItems;
  }
  handleActions(action) {
    switch (action.type) {
      case 'LOAD_WISHLIST_ITEMS':
        this.wishlistItems = action.items;
        this.emit('change');
        break;
      case 'ADD_TO_WISHLIST':
        this.addToWishlist(action.item);
        this.emit('change');
        break;
      case 'DELETE_WISHLIST_ITEM':
        this.deleteItem(action.id);
        this.emit('change');
        break;
      default: break;
    }
  }
}

const wishlistStore = new WishlistStore();

dispatcher.register(wishlistStore.handleActions.bind(wishlistStore));

export default wishlistStore;
