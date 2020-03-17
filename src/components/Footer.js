import React from 'react';
import styled from 'styled-components';
import { Text, Link, Flex } from 'rebass';
import Fade from 'react-reveal/Fade';

const FooterContainer = styled.footer`
  padding: 16px;
  background: ${props => props.theme.greenTheme.tertiaryColor};
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
  color: ${props => props.theme.greenTheme.secondFontColor};

  & a {
    color: ${props => props.theme.greenTheme.secondFontColor};
  }
`;

const Footer = () => (
  <FooterContainer p={3} as="footer">
    <div>
      <Fade left>
        <TextFooter fontSize={[2, 3]}>
          <span>
            Copyright © 2020 綠捷傳動股份有限公司. All Rights Reserved.
          </span>
        </TextFooter>
      </Fade>
      <Flex>
        <Fade right></Fade>
      </Flex>
    </div>
  </FooterContainer>
);

export default Footer;
