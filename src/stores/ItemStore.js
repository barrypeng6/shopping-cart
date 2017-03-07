import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class ItemStore extends EventEmitter {
  constructor() {
    super();
    this.items = [];
  }
  getAll() {
    return this.items;
  }
  handleActions(action) {
    switch (action.type) {
      case 'LOAD_ITEMS':
        this.items = action.items;
        this.emit('change');
        break;
      default: break;
    }
  }
}

const itemStore = new ItemStore();

dispatcher.register(itemStore.handleActions.bind(itemStore));

export default itemStore;
