import React from 'react';
import styled from 'styled-components';
import { Text, Link, Flex } from 'rebass';
import Fade from 'react-reveal/Fade';

const FooterContainer = styled.footer`
  padding: 16px;
  background: ${props => props.theme.colors.primaryDark};
  > div:first-child {
    min-width: 320px;
    max-width: 1366px;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }
`;

const TextFooter = styled(Text)`
  color: ${props => props.theme.colors.background};

  & a {
    color: ${props => props.theme.colors.background};
  }
`;

const Footer = () => (
  <FooterContainer p={3} backgroundColor="primaryDark" as="footer">
    <div>
      <Fade left>
        <TextFooter fontSize={[2, 3]}>
          <span>{`綠捷傳動 Portfolio - Powered by `}</span>
          <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
          <span>, </span>
          <Link href="https://www.contentful.com/" mr={1}>
            Contentful
          </Link>
          <span> and </span>
          <Link href="https://www.netlify.com/" mr={1}>
            Netlify
          </Link>
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </TextFooter>
      </Fade>
      <Flex>
        <Fade right>test</Fade>
      </Flex>
    </div>
  </FooterContainer>
);

export default Footer;
