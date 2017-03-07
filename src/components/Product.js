import React from 'react';
import ProductList from './ProductList';

const Product = ({ handleSubmit, handleAddToWishlist, items }) => (
  <div>
    <ProductList
      onSubmit={handleSubmit}
      onAddToWishlist={handleAddToWishlist}
      items={items}
    />
  </div>
);

Product.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  handleAddToWishlist: React.PropTypes.func.isRequired,
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default Product;
