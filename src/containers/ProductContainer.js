import React from 'react';
import Product from '../components/Product';
import ItemStore from '../stores/ItemStore';
import * as CartActions from '../actions/CartActions';
import * as WishlistActions from '../actions/WishlistActions';


class ProductContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      items: ItemStore.getAll()
    };
  }
  render() {
    return (
      <div>
        <Product
          handleSubmit={CartActions.addToCart}
          handleAddToWishlist={WishlistActions.addToWishlist}
          items={this.state.items}
        />
      </div>
    );
  }
}

export default ProductContainer;
