import React from 'react';
import { withTheme } from 'theming';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appTitle: 'Amazing Beverage Delivery System!',
    };
  }

  render() {
    const theme = this.props.theme;

    const style = {
      background: theme.primaryBackgroundColor,
      boxShadow: theme.boxShadow,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100vw',
    };

    const contentStyle = {
      boxSizing: 'border-box',
      margin: 'auto',
      maxWidth: '960px',
      padding: '24px',
    };
    return (
      <div className='zx-app' style={style}>
        <AppHeader title={this.state.appTitle} />
        <div className='zx-app__content' style={contentStyle}>
          {this.props.children}
        </div>
        <AppFooter />
      </div>
    );
  }
}

export default withTheme(App);
