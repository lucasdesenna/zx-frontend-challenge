import React from 'react';
import { Route } from 'react-router-dom';
import App from './app/App';
import AddressSearchfield from './address/AddressSearchfield';

const Routes = (
  <App>
    <Route path='/' component={AddressSearchfield} />
  </App>
);

export default Routes
