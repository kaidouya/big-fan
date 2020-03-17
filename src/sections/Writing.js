import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import { Card } from '../components/Card'
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import Modal from 'react-bootstrap/Modal';
import WritingContent from '../components/WritingTable';

const Background = () => (
  <div>
    <Triangle
      color="fourColor"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="fiveColor"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="tertiaryColor"
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
  border-bottom: ${props => props.theme.greenTheme.tertiaryColor} 4px solid;
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

  const [show, setShow] = useState(false);
  const [tempTitle, setTempTitle] = useState('');
  const [writingLabel, setWritingLabel] = useState('');

  const setAlldata = (titleText, label) => {
    setShow(true);
    setTempTitle(titleText);
    setWritingLabel(label);
  }

  return (
    <>
      <Section.Container id="writing" Background={Background}>
        <Section.Header name="詳細資料" icon="✍️" label="writing" />
        <Container fluid>
          <Row>
            <Col md={4} className="mt-2 mb-2" onClick={() => setAlldata('永磁直驅與齒輪減速機比較表', 'writing-01')}>
              <Fade bottom>
                <WritingChild title="永磁直驅與齒輪減速機比較表">
                  <Img fluid={imageList[0].node.childImageSharp.fluid}></Img>
                </WritingChild>
              </Fade>
            </Col>
            <Col md={4} className="mt-2 mb-2" onClick={() => setAlldata('直驅大風機規格書(2.5M~7.2M)', 'writing-02')}>
              <Fade bottom>
                <WritingChild title="直驅大風機規格書(2.5M~7.2M)">
                  <Img fluid={imageList[1].node.childImageSharp.fluid}></Img>
                </WritingChild>
              </Fade>
            </Col>
            <Col md={4} className="mt-2 mb-2" onClick={() => setAlldata('永磁直驅大風機馬達本體特性', 'writing-03')}>
              <Fade bottom>
                <WritingChild title="永磁直驅大風機馬達本體特性">
                  <Img fluid={imageList[2].node.childImageSharp.fluid}></Img>
                </WritingChild>
              </Fade>
            </Col>
          </Row>
        </Container>
      </Section.Container>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {tempTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WritingContent label={writingLabel} />
        </Modal.Body>
      </Modal>
    </>
  );
}


export default Writing;