import React from 'react';
import InputField from './InputField';

const ProductItem = ({ onSubmit, item, onAddToWishlist }) => (
  <div>
    <span>
      {`${item.name} - $${item.price}`}
      <InputField onSubmitNum={onSubmit} />
    </span>
    <button onClick={onAddToWishlist}>加入追蹤清單</button>
    <button onClick={onAddToWishlist}>詳細</button>
  </div>
);

ProductItem.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  item: React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    price: React.PropTypes.number
  }).isRequired,
  onAddToWishlist: React.PropTypes.func.isRequired
};

export default ProductItem;
