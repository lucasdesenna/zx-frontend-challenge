import React from 'react';
import {
  withTheme
} from 'theming';
import {
  withRouter
} from 'react-router-dom';

import ProductsResource from './Products.resource';
import ProductGrid from './ProductGrid';

const queryString = require('query-string');

type Props = {
  location: any,
};


class Products extends React.Component < Props > {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const self = this;
    const queryParams = queryString.parse(this.props.location.search);

    ProductsResource.getProducts(queryParams.lat, queryParams.lng)
      .then((response) => {
        self.setState({
          products: response
        });
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  render() {
    const theme = this.props.theme;

    const style = {

    };

    return(
      <div className='zx-products' style={style} >
        <ProductGrid products={this.state.products} />
      </div>
    );
  }
}

export default withTheme(withRouter(Products));
