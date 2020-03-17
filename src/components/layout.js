import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ResetStyle, GlobalStyle } from '../Style/globalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/special.css';
import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import config from 'react-reveal/globals';
import colors from '../../colors';
import myTheme from '../style/myTheme';

config({ ssrFadeout: true });

const loadScript = src => {
  const tag = document.createElement('script');
  tag.src = src;
  tag.defer = true;

  document.getElementsByTagName('body')[0].appendChild(tag);
};

const Layout = ({ children }) => {
  useEffect(() => {
    loadScript('https://use.fontawesome.com/fd58d214b9.js');
  }, []);

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
