import React from 'react';

import { AddressLocation } from './AddressLocation.type';

type Props = {
  theme: any,
  onAddressLocationChanged: Function,
};

class AddressSearchfield extends React.Component < Props > {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const style = {
      borderRadius: '6px',
      margin: '24px 16px',
      minWidth: '40%',
      padding: '8px 16px',
      outline: 'none',
    };

    return(
      <input id='zx-address-searchfield' className='zx-address-searchfield' style={style} placeholder='Delivery address'/>
    );
  }

  componentDidMount() {
    const input = document.getElementById('zx-address-searchfield');
    setupAutocomplete(input, this.props.onAddressLocationChanged);
  }
}

function setupAutocomplete(inputElement, autocompleteCallback) {
  if(
    window.google &&
    window.google.maps &&
    window.google.maps.places &&
    window.google.maps.places.Autocomplete
  ) {
    const autocomplete = new window.google.maps.places.Autocomplete(inputElement);

    autocomplete.addListener('place_changed', function () {
      const place = autocomplete.getPlace();
      if(place.geometry && place.geometry.location) {
        const addressLocation: AddressLocation = {
          lat: place.geometry.location.lat()
            .toString(),
          lng: place.geometry.location.lng()
            .toString(),
        }

        autocompleteCallback(addressLocation);
      }
    });
  } else {
    console.warn('google places api is not loaded');
  }
}

export default AddressSearchfield;
