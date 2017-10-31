import React from 'react';
import {
  withTheme
} from 'theming';
import {
  withRouter
} from 'react-router-dom'

import {
  AddressLocation
} from './AddressLocation.type';
import AddressSearchfield from './AddressSearchfield';

type Props = {
  theme: any,
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

  render() {
    const theme = this.props.theme;

    const style = {
      textAlign: 'center',
    };

    const headingStyle = {
      textShadow: '0 2px 1px rgba(0, 0, 0, .8)',
      color: theme.primaryColor,
      fontSize: '36px',
      letterSpacing: '1px',
    };

    const callToActionStyle = {
      fontSize: '24px',
    };

    return(
      <div className='zx-address' style={style} >
        <h1 className='zx-address__heading' style={headingStyle} >
          Our best beverages are waiting for you!
        </h1>
        <p className='zx-address__call-to-action' style={callToActionStyle} >
          Just tell us where to deliver them:
        </p>
        <AddressSearchfield onAddressLocationChanged={this.goToProducts.bind(this)}/>
      </div>
    );
  }
}

export default withTheme(withRouter(Address));
