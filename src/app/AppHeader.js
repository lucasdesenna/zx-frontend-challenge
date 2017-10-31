import React from 'react';
import {
  withTheme
} from 'theming';

type Props = {
  theme: any,
  title: string,
  children: any
};

const AppHeader = (props: Props) => {
  const theme = props.theme;

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
    <header className = 'zx-app-header' style={style} >
      <div className = 'zx-app-header__content' style={contentStyle} >
        <h1 style={titleStyle} >{props.title}</h1>
      </div>
    </header>
  );
}

export default withTheme(AppHeader);
