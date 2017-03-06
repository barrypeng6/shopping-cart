import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Shop from './Shop';
import CartContainer from './CartContainer';
import WishlistContainer from './WishlistContainer';
import Home from './Home';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/shop" component={Shop}>
      <IndexRoute component={Home} />
      <Route path="/cart" component={CartContainer} />
      <Route path="/wishlist" component={WishlistContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
