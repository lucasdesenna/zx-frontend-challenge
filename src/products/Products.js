import React from 'react';
import { withRouter } from 'react-router-dom';

import ProductsResource from './Products.resource';
import ProductGrid from './ProductGrid';

const queryString = require('query-string');

type Props = {
  location: any,
  history: any,
};

class Products extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  getProducts() {
    const queryParams = queryString.parse(this.props.location.search);

    return ProductsResource.getProducts(queryParams.lat, queryParams.lng)
  }

  updateProducts(newProducts) {
    this.setState({products: newProducts});
  }

  returnToAddress() {
    this.props.history.push('/home?error=no_stores');
  }

  componentWillMount() {
    this.getProducts().then(((products) => {
      if(products.length > 0) {
        this.updateProducts(products);
      } else {
        this.returnToAddress();
      }
    }).bind(this))
    .catch((err) => {
      console.warn(err);
    });
  }

  render() {
    return(
      <div className='zx-products' >
        <ProductGrid products={this.state.products} />
      </div>
    );
  }
}

export default withRouter(Products);
