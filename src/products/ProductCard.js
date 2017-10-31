import React from 'react';
import {
  withTheme
} from 'theming';

type Props = {
  theme: any,
};

class ProductCard extends React.Component < Props > {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.product)
  }

  render() {
    const theme = this.props.theme;
    const product = this.props.product.productVariants[0];

    const style = {
      borderRadius: '4px',
      boxShadow: theme.boxShadow,
      height: '128px',
      margin: '8px',
      width: '128px',
    };

    return(
      <div className='zx-product-card' style={style}>
        <h4>{product.title}</h4>
        <span>{product.price}</span>
      </div>
    );
  }
}

export default withTheme(ProductCard);
