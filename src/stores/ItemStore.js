import { EventEmitter } from 'events';
// import dispatcher from '../dispatcher';

class ItemStore extends EventEmitter {
  constructor() {
    super();
    this.items = [
      {
        id: 1,
        name: 'apple',
        price: 20
      },
      {
        id: 2,
        name: 'orange',
        price: 30
      },
      {
        id: 3,
        name: 'lemon',
        price: 10
      },
      {
        id: 4,
        name: 'banana',
        price: 25
      }
    ];
  }
  getAll() {
    return this.items;
  }
}

const itemStore = new ItemStore();

// dispatcher.register(itemStore.handleActions.bind(itemStore));

export default itemStore;
