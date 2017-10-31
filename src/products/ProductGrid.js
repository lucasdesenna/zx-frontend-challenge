import React from 'react';
import {
  withTheme
} from 'theming';

import Spinner from '../common/Spinner';
import ProductCard from './ProductCard';

type Props = {
  products: any[],
  theme: any,
};

class ProductGrid extends React.Component < Props > {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: <Spinner />,
    }
  }

  componentWillReceiveProps(nextProps) {
    if(
      nextProps.products !== this.props.products &&
      nextProps.products.length > 0
    ) {
      const newContent = nextProps.products.map(
        (product, index) => (<ProductCard key={index} product={product} />)
      );

      this.setState({content: newContent});
    } else {
      this.setState({content: <Spinner />});
    }
  }

  render() {
    const theme = this.props.theme;

    const style = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    };

    return(
      <div className='zx-product-grid' style={style}>
        {this.state.content}
      </div>
    );
  }
}

export default withTheme(ProductGrid);
