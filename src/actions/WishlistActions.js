import dispatcher from '../dispatcher';

export function loadWishlistItems() {
  fetch('./assets/wishlistItems.json')
      .then(response => response.json())
      .then(items => dispatcher.dispatch({
        type: 'LOAD_WISHLIST_ITEMS',
        items
      }));
}

export function addToWishlist(item) {
  dispatcher.dispatch({
    type: 'ADD_TO_WISHLIST',
    item
  });
}

export function deleteItem(id) {
  dispatcher.dispatch({
    type: 'DELETE_WISHLIST_ITEM',
    id
  });
}
