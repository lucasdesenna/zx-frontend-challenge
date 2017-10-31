import React from 'react';
import {
  withTheme
} from 'theming';

type Props = {
  theme: any,
  children: any
};

const AppFooter = (props: Props) => {
  const style = {
    background: props.theme.darkBackgroundColor,
    bottom: '0',
    boxSizing: 'border-box',
    color: props.theme.lightGrayColor,
    fontSize: '14px',
    position: 'fixed',
    width: '100%',
  };

  const contentStyle = {
    margin: '0 auto',
    maxWidth: '960px',
    padding: '8px 24px',
  };

  return(
    <div className='zx-app-footer' style={style}>
      <div className='zx-app-footer__content' style={contentStyle}>
        <a href='https://github.com/lucasdesenna' rel='noopener noreferrer' target='_blank' >
          <small>by Lucas de Senna</small>
        </a >
      </div>
    </div>
  );
}

export default withTheme(AppFooter);
