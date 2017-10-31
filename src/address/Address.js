import React from 'react';
import { withTheme } from 'theming';
import { withRouter } from 'react-router-dom'

import { AddressLocation } from './AddressLocation.type';
import AddressSearchfield from './AddressSearchfield';
import Greeting from './Greeting';
import ErrorMessage from './ErrorMessage';

const queryString = require('query-string');

type Props = {
  theme: any,
  location: any,
  history: any,
}

class Address extends React.Component < Props > {
  constructor(props: Props) {
    super(props);
  }

  goToProducts(addressLocation: AddressLocation) {
    const path = `/products?lat=${addressLocation.lat}&lng=${addressLocation.lng}`;

    this.props.history.push(path);
  }

  getError() {
    return queryString.parse(this.props.location.search).error
  }

  render() {
    const style = {
      textAlign: 'center',
    };

    const greeting = (() => {
      const error = this.getError();

      if (error) {
        return (<ErrorMessage />);
      }

      return (<Greeting />);
    })()

    return(
      <div className='zx-address' style={style} >
        {greeting}
        <AddressSearchfield onAddressLocationChanged={this.goToProducts.bind(this)}/>
      </div>
    );
  }
}

export default withTheme(withRouter(Address));
