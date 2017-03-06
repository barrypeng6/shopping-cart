import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ onSubmit, onAddToWishlist, items }) => (
  <ol>
    {items.map(item =>
      <li key={item.id}>
        <ProductItem
          onSubmit={value => onSubmit(Number(value), item)}
          onAddToWishlist={() => onAddToWishlist(item)}
          item={item}
        />
      </li>
    )}
  </ol>
);

ProductList.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onAddToWishlist: React.PropTypes.func.isRequired,
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default ProductList;
