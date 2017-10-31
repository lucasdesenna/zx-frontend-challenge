import React from 'react';
import {
  withTheme
} from 'theming';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

type Props = {
  theme: any,
  children: any,
};

class App extends React.Component < Props > {
  constructor(props: Props) {
    super(props);
    this.state = {
      appTitle: 'ZX Delivery System'
    };
  }

  render() {
    const theme = this.props.theme;

    const style = {
      alignItems: 'center',
      background: theme.primaryBackgroundColor,
      boxShadow: theme.boxShadow,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '64px 0 32px',
      width: '100%',
    };

    const contentStyle = {
      boxSizing: 'border-box',
      margin: 'auto',
      maxWidth: '960px',
      padding: '24px'
    };
    return(
      <div className = 'zx-app' style = {style} >
        <AppHeader title = {this.state.appTitle} />
        <div className = 'zx-app__content' style = {contentStyle} >
          {this.props.children}
        </div>
        <AppFooter />
      </div>
    );
  }
}

export default withTheme(App);
