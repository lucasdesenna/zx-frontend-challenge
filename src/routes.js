import React from 'react';
import {
  Route
} from 'react-router-dom';
import App from './app/App';
import Address from './address/Address';
import Products from './products/Products';

const Routes = (
  <App>
    <Route exact path='/' component={Address} />
    <Route path='/products' component={Products} />
  </App>
);

export default Routes
