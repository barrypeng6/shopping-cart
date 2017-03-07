import dispatcher from '../dispatcher';

export function loadCartItems() {
  fetch('./assets/cartItems.json')
      .then(response => response.json())
      .then(items => dispatcher.dispatch({
        type: 'LOAD_CARTITEMS',
        items
      }));
}

export function addToCart(amount, item) {
  dispatcher.dispatch({
    type: 'ADD_TO_CART',
    amount,
    item
  });
}

export function deleteItem(id) {
  dispatcher.dispatch({
    type: 'DELETE_CARTITEM',
    id
  });
}

export function deleteSelected(ids) {
  dispatcher.dispatch({
    type: 'DELETE_SELECTED_CARTITEM',
    ids
  });
}
