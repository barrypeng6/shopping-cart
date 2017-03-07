import dispatcher from '../dispatcher';

export function loadItems() {
  fetch('./assets/items.json')
      .then(response => response.json())
      .then(items => dispatcher.dispatch({
        type: 'LOAD_ITEMS',
        items
      }));
}
