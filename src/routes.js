import React from 'react';
import {
  Route
} from 'react-router-dom';
import App from './app/App';
import Address from './address/Address';

const Routes = (
  <App>
    <Route path='/' component={Address} />
  </App>
);

export default Routes
