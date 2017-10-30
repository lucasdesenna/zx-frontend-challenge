import React from 'react';
import { withTheme } from 'theming';


const AppFooter = ({theme}) => {
  const style = {
    width: '100%',
    background: theme.darkBackgroundColor,
    boxSizing: 'border-box',
    color: theme.lightGrayColor,
    fontSize: '14px',
  };

  const contentStyle = {
    margin: '0 auto',
    maxWidth: '960px',
    padding: '8px 24px',
  };

  return (
    <div className='zx-app-footer' style={style}>
      <div className='zx-app-footer__content' style={contentStyle}>
        <a href='https://github.com/lucasdesenna' target='_blank'><small>by Lucas de Senna</small></a>
      </div>
    </div>
  );
}

export default withTheme(AppFooter);
