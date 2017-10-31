import React from 'react';
import {
  withTheme
} from 'theming';

import AddressSearchfield from './AddressSearchfield'

type Props = {
  theme: any,
}

type State = {
  googleMapsLocation: any,
}

const initialState: State = {
  googleMapsLocation: null,
};

class Address extends React.Component < Props > {
  constructor(props: Props) {
    super(props);

    this.state = initialState;
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
        <AddressSearchfield googleMapsLocation={this.state.googleMapsLocation}/>
      </div>
    );
  }
}

export default withTheme(Address);
