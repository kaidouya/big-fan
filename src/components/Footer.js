import React from 'react';
import styled from 'styled-components';
import { Text, Box, Flex } from 'rebass';
import Fade from 'react-reveal/Fade';
import SocialLink from '../components/SocialLink';
import { socialLinks } from '../text/socoalLinks';

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
  path{
    color:${props => props.theme.greenTheme.secondFontColor};
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
        <Fade right>
          {socialLinks.map(({ id, ...rest }) => (
            <Box mx={3} fontSize={[5, 6, 6]} key={id}>
              <SocialLink {...rest} />
            </Box>
          ))}
        </Fade>
      </Flex>
    </div>
  </FooterContainer>
);

export default Footer;
