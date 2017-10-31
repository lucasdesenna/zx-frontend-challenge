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
      alignContent: 'space-between',
      borderRadius: '4px',
      boxSizing: 'border-box',
      boxShadow: theme.boxShadow,
      display: 'flex',
      flexWrap: 'wrap',
      height: '232px',
      margin: '16px 8px',
      width: '232px',
    };

    const titleStyle = {
      background: theme.primaryColor,
      borderTopRightRadius: '6px',
      borderTopLeftRadius: '6px',
      color: theme.primaryContrastColor,
      margin: 0,
      padding: '24px',
      width: '100%',
    };
    const priceStyle = {
      padding: '8px 24px',
      textAlign: 'right',
      width: '100%',
    };
    const addItemButtonStyle = {
      borderRadius: '6px',
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      fontSize: '16px',
      fontWeight: 'bold',
      height: '48px',
      marginLeft: 'auto',
      marginBottom: '24px',
      padding: '8px',
      width: '48px',
    };
    const removeItemButtonStyle = {
      borderRadius: '6px',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '24px',
      marginRight: '24px',
      height: '48px',
      padding: '8px',
      width: '48px',
    };

    return(
      <div className='zx-product-card' style={style}>
        <h4 className='zx-product-card__title' style={titleStyle}>{product.title}</h4>
        <div className='zx-product-card__price' style={priceStyle}>R$ {product.price}</div>
        <button className='zx-product-card__add-item-button' style={addItemButtonStyle}>+</button>
        <button className='zx-product-card__remove-item-button' style={removeItemButtonStyle}>-</button>
      </div>
    );
  }
}

export default withTheme(ProductCard);
