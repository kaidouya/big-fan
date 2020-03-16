import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import FontAwesomeIcon from 'react-fontawesome';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import { Card } from '../components/Card'
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const EllipsisHeading = styled.h5`
  display: -webkit-inline-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
  overflow: hidden;
`;

const WritingChild = ({ title, children }) => {
  return (
    <Card>
      <EllipsisHeading m={3} p={1}>
        {title}
      </EllipsisHeading>
      {children}
    </Card>
  );
}

const Writing = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "writing"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxHeight: 200) {
              src
              srcSet
              base64
              aspectRatio
              sizes
            }
          }
        }
      }
    }
  }  
  `);

  const imageList = data.allFile.edges;

  return (
    <Section.Container id="詳細資料" Background={Background}>
      <Section.Header name="詳細資料" icon="✍️" label="writing" />
      <Container fluid>
        <Row>
          <Col md={4} className="mt-2 mb-2">
            <Fade bottom>
              <WritingChild title="永磁直驅與齒輪減速機比較表">
                <Img fluid={imageList[0].node.childImageSharp.fluid}></Img>
              </WritingChild>
            </Fade>
          </Col>
          <Col md={4} className="mt-2 mb-2">
            <Fade bottom>
              <WritingChild title="直驅大風機規格書(2.5M~7.2M)">
                <Img fluid={imageList[1].node.childImageSharp.fluid}></Img>
              </WritingChild>
            </Fade>
          </Col>
          <Col md={4} className="mt-2 mb-2">
            <Fade bottom>
              <WritingChild title="永磁直驅大風機馬達本體特性">
                <Img fluid={imageList[2].node.childImageSharp.fluid}></Img>
              </WritingChild>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Section.Container>
  );
}


export default Writing;