import React from 'react';
import { withTheme } from 'theming';

type Props = {
  theme: any,
};

const Greeting = (props: Props) => {
  const theme = props.theme;

  const headingStyle = {
    textShadow: '0 2px 1px rgba(0, 0, 0, .8)',
    color: theme.primaryColor,
    fontSize: '36px',
    letterSpacing: '1px',
  };

  const callToActionStyle = {
    fontSize: '24px',
  };

  return (
    <div>
      <h1 className='zx-address__heading' style={headingStyle} >
        Our best beverages are waiting for you!
      </h1>
      <p className='zx-address__call-to-action' style={callToActionStyle} >
        Just tell us where to deliver them:
      </p>
    </div>
  );
}


export default withTheme(Greeting);
