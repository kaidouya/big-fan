import React from 'react';
import { Heading, Flex, Box, Text } from 'rebass';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';
import { socialLinks } from '../text/socoalLinks';

const Background = () => (
  <div>
    {/* 左上角２ */}
    <Triangle
      color="primaryColor"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    {/* 左上角 */}
    <Triangle
      color="tertiaryColor"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    {/* 右上角 */}
    <Triangle
      color="secondaryColor"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    {/* 右下角 */}
    <Triangle
      color="primaryColor"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const roles = [
  '高性能、高品質 🚀',
  '節能傳動科技為主軸 📱',
  '多功能驅動器 ✨',
  '永續經營的服務 🔧',
];

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <Heading
      textAlign="center"
      as="h1"
      color="primary"
      fontSize={[5, 6, 8]}
      mb={[3, 4, 5]}
    >
      {`Hello, I'm 綠捷傳動!`}
    </Heading>

    <Heading
      as="h2"
      color="primary"
      fontSize={[4, 5, 6]}
      mb={[3, 5]}
      textAlign="center"
      style={centerHorizontally}
    >
      <TextLoop interval={5000}>
        {roles.map(text => (
          <Text width={[300, 500]} key={text}>
            {text}
          </Text>
        ))}
      </TextLoop>
    </Heading>

    <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
      {socialLinks.map(({ id, ...rest }) => (
        <Box mx={3} fontSize={[5, 6, 6]} key={id}>
          <SocialLink {...rest} />
        </Box>
      ))}
    </Flex>
    <SectionLink section="about">
      {({ onClick }) => <MouseIcon onClick={onClick} />}
    </SectionLink>
  </Section.Container>
);

export default LandingPage;
