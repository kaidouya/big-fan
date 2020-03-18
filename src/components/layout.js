import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../style/globalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/special.css';
import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import config from 'react-reveal/globals';
import myTheme from '../style/myTheme';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

config({ ssrFadeout: true });
library.add(fas, fab);

const Layout = ({ children }) => {
  return (
    <main>
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        <ScrollingProvider>{children}</ScrollingProvider>
      </ThemeProvider>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
