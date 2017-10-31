import React from 'react';
import {
  withTheme
} from 'theming';

type Props = {
  theme: any,
  product: any,
};

class ProductCard extends React.Component < Props > {
  constructor(props: Props) {
    super(props);

    this.state = {
      quantity: 0,
    };
  }

  addToCart() {
    this.setState({quantity: Math.min(this.state.quantity + 1, 99) });
  }

  removeFromCart() {
    this.setState({quantity: Math.max(this.state.quantity - 1, 0) });
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
      margin: '16px 8px',
      width: '232px',
    };

    const titleStyle = {
      background: theme.primaryColor,
      borderTopRightRadius: '6px',
      borderTopLeftRadius: '6px',
      boxSizing: 'border-box',
      color: theme.primaryContrastColor,
      margin: '0 0 24px',
      minHeight: '86px',
      padding: '24px 16px',
      width: '100%',
    };

    const priceStyle = {
      borderTop: '#ccc solid 1px',
      borderBottom: '#ccc solid 1px',
      boxSizing: 'border-box',
      flexGrow: 1,
      height: '48px',
      lineHeight: '32px',
      padding: '8px',
      textAlign: 'center',
    };

    const addItemButtonStyle = {
      borderTopRightRadius: '6px',
      borderBottomRightRadius: '6px',
      fontSize: '16px',
      fontWeight: 'bold',
      height: '48px',
      marginBottom: '24px',
      marginRight: '16px',
      padding: '8px',
      outline: 'none',
      width: '32px',
    };

    const removeItemButtonStyle = {
      borderTopLeftRadius: '6px',
      borderBottomLeftRadius: '6px',
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '24px',
      marginLeft: '16px',
      height: '48px',
      padding: '8px',
      outline: 'none',
      width: '32px',
    };

    return(
      <div className='zx-product-card' style={style}>
        <h4 className='zx-product-card__title' style={titleStyle}>{product.title}</h4>
        <button className='zx-product-card__remove-item-button' style={removeItemButtonStyle} onClick={this.removeFromCart.bind(this)}>-</button>
        <div className='zx-product-card__price' style={priceStyle}>
          {this.state.quantity > 0 ? `${this.state.quantity} x ` : ''}
          R$ {product.price}
        </div>
        <button className='zx-product-card__add-item-button' style={addItemButtonStyle} onClick={this.addToCart.bind(this)}>+</button>
      </div>
    );
  }
}

export default withTheme(ProductCard);
