import React from 'react';
import {
  Redirect,
  Route
} from 'react-router-dom';
import App from './app/App';
import Address from './address/Address';
import Products from './products/Products';

const Routes = (
  <App>
    <Route path='/home' component={Address} />
    <Route path='/products' component={Products} />
    <Route exact path='/' render={() => (<Redirect to='/home'/>)} />
  </App>
);

export default Routes
