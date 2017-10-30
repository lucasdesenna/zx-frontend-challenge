import React from 'react';
import { withTheme } from 'theming';

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const theme = this.props.theme;

    const style = {
      background: theme.primaryColor,
      boxShadow: theme.boxShadow,
      boxSizing: 'border-box',
      color: theme.primaryTextColor,
      width: '100%',
    };

    const contentStyle = {
      margin: '0 auto',
      maxWidth: '960px',
      padding: '16px 24px',
    };

    const titleStyle = {
      margin: 0,
    };

    return (
      <header className='zx-header' style={style}>
        <div className='zx-header__content' style={contentStyle}>
          <h1 style={titleStyle}>{this.props.title}</h1>
        </div>
      </header>
    );
  }
}

export default withTheme(AppHeader);
