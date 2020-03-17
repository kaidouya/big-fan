import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import { Container, Row, Col } from 'react-bootstrap';
import AboutText from '../text/AboutText';
import Img from 'gatsby-image';

const Background = () => (
  <div>
    <Triangle
      color="primaryColor"
      height={['50vh', '20vh']}
      width={['49vw', '49vw']}
      invertY
    />

    <Triangle
      color="fiveColor"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="primaryColor"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const PictureConatiner = styled.div`
  border-radius: 50%;
  transition: all 0.25s ease-out;
  overflow: hidden;
  &:hover {
    border-radius: 20%;
  }
`;

const InfoAra = styled.p`
  line-height: 2em;

  &:first-child {
    margin-top: 0em;
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `);
  return (
    <Section.Container id="about" Background={Background}>
      <Section.Header name="永磁直驅大風機" icon="💧" label="person" />
      <Container fluid>
        <Row>
          <Col xs={12} md={8}>
            <Fade bottom>
              <AboutText />
            </Fade>
          </Col>
          <Col xs={12} md={4}>
            <Fade right>
              <PictureConatiner>
                <Img fluid={data.file.childImageSharp.fluid}></Img>
              </PictureConatiner>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Section.Container>
  );
};

export default About;
