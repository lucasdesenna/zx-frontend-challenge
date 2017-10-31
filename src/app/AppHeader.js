import React from 'react';
import { withTheme } from 'theming';
import Logo from '../assets/zx-logo.png';

type Props = {
  theme: any,
  title: string,
  children: any,
};

const AppHeader = (props: Props) => {
  const theme = props.theme;

  const style = {
    background: theme.primaryColor,
    boxShadow: theme.boxShadow,
    boxSizing: 'border-box',
    color: theme.primaryTextColor,
    position: 'fixed',
    top: '0',
    width: '100%',
  };

  const contentStyle = {
    alignItems: 'center',
    display: 'flex',
    margin: '0 auto',
    maxWidth: '960px',
    padding: '16px 24px',
  };

  const logoStyle = {
    height: '48px',
    marginRight: '24px',
    textShadow: '0 -2px 0 rgba(0, 0, 0, .6)',
    width: '48px',
  };

  const titleStyle = {
    fontSize: '24px',
    margin: 0,
    textShadow: '0 -2px 0 rgba(0, 0, 0, .6)',
  };

  return (
    <header className = 'zx-app-header' style={style} >
      <div className = 'zx-app-header__content' style={contentStyle} >
        <img src={Logo} style={logoStyle} />
        <h1 style={titleStyle} >{props.title}</h1>
      </div>
    </header>
  );
}

export default withTheme(AppHeader);
