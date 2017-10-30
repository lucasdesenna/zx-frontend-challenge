import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'theming';

import theme from './theme';
import routes from './routes';

const Root = () => (
  <ThemeProvider theme={theme}>
    <Router>
      {routes}
    </Router>
  </ThemeProvider>
);

export default Root;
