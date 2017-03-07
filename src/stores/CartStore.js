import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class CartStore extends EventEmitter {
  constructor() {
    super();
    this.items = [
      {
        id: 1241423423,
        itemId: 4,
        name: 'banana',
        price: 25,
        amount: 2
      }
    ];
  }
  addToCart(amount, item) {
    const specificItem = this.items.find(oldCardItem => oldCardItem.itemId === item.id);
    if (specificItem) {
      const newCartItem = {
        id: specificItem.id,
        itemId: item.id,
        name: item.name,
        price: item.price,
        amount: specificItem.amount + amount
      };
      this.items = this.items.map(oldCardItem =>
        oldCardItem.itemId === item.id ? newCartItem : oldCardItem);
    } else {
      const newCartItem = {
        id: Date.now(),
        itemId: item.id,
        name: item.name,
        price: item.price,
        amount
      };
      this.items = this.items.concat(newCartItem);
    }
  }
  deleteItem(id) {
    this.items = this.items.filter(oldCardItem => oldCardItem.id !== id);
  }
  deleteSelected(ids) {
    ids.forEach((id) => {
      this.items = this.items.filter(oldCardItem => oldCardItem.id !== id);
    });
  }
  getAll() {
    return this.items;
  }
  handleActions(action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        this.addToCart(action.amount, action.item);
        this.emit('change');
        break;
      case 'DELETE_CARTITEM':
        this.deleteItem(action.id);
        this.emit('change');
        break;
      case 'DELETE_SELECTED_CARTITEM':
        this.deleteSelected(action.ids);
        this.emit('change');
        break;
      default: break;
    }
  }
}

const cartStore = new CartStore();

dispatcher.register(cartStore.handleActions.bind(cartStore));

export default cartStore;
