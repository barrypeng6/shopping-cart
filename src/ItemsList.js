import React from 'react';
import Item from './Item';

class ItemsList extends React.Component {
  render() {
    const { onSubmit, onAddToWishlist, items } = this.props;
    return (
      <ol>
        {items.map(item =>
          <li key={item.id}>
            <Item
              onSubmit={value => onSubmit(Number(value), item)}
              onAddToWishlist={() => onAddToWishlist(item)}
              item={item}
            />
          </li>
        )}
      </ol>
    );
  }
}

ItemsList.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

export default ItemsList;
