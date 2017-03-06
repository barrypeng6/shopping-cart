import dispatcher from '../dispatcher';

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
