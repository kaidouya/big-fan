import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, Flex, Box } from 'rebass'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Section from '../components/Section'
import { Card } from '../components/Card'
import SocialLink from '../components/SocialLink'
import Triangle from '../components/Triangle'
import { Container, Row, Col } from 'react-bootstrap'

const Background = () => (
  <div>
    <Triangle
      color='secondaryLight'
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color='background'
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color='primaryDark'
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color='backgroundDark'
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
)

const CustomLabel = styled.div`
    position: absolute;
    right: 0px;
    bottom: -1px;
    margin: 0px;
    padding: 10px 10px 10px 20px;
    background-color: rgb(124, 55, 173);
    color: white;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    clip-path: polygon(20px 0%, 100% 0%, 100% 100%, 0% 100%);
    box-sizing: border-box;
    border-radius: 0px 0px 8px;
`

const Project = ({ name, children }) => {
  return (
    <Card>
      {children}
      <CustomLabel>{name}</CustomLabel>
    </Card>
  );
}

const Projects = () => {
  return (
    <Section.Container id='projects' Background={Background} >
      <Section.Header name='產品特色' icon='💻' label='notebook' />
      <Container fluid>
        <Row>
          <Col md={4} className="mt-2 mb-2">
            <Fade bottom delay={200}>
              <Project name="市場應用現狀">
                <h5>感應電機+減速箱驅動風機存在的問題：</h5>
                <ul>
                  <li>減速機效率低，能耗大，噪音高。</li>
                  <li>減速箱內部壓力升高引起漏油。</li>
                  <li>減速後功率損耗（整體效率降低）。</li>
                  <li>機械磨損需定期維護。</li>
                  <li>尺寸龐大，安裝複雜</li>
                </ul>
              </Project>
            </Fade>
          </Col>
          <Col md={4} className="mt-2 mb-2">
            <Fade bottom delay={400}>
              <Project name="機種的差異">
                <h5>永磁直驅電機與變頻式減速機的差異：</h5>
                <ul>
                  <li>
                    ★直驅電機是一種特殊的永磁電機，通常也稱做為永磁同步電機或者直流無
                    刷電機。由於帶動負載不需要轉接裝置（如減速箱，皮帶輪，鏈條等）而是葉片直接連接到電機的轉動體上，合體後稱之為直驅風機。
              </li>
                  <li>
                    ★永磁直驅式電機結構設計緊湊，採用胖短型的鐵心堆疊設計，能在低轉速
                    下提供高轉矩輸出。相對的感應電機轉速高轉矩小；所以必須透過減速機
                    放大轉矩，轉換效率低。
              </li>
                  <li>
                    ★直驅電機在額定的轉速內，無論零速狀態或堵轉狀態下都會產生高轉矩。
                    傳統感應電機是無法達到的，所以直驅電機的主要特性是轉矩，而不是功
                    率。當三相負載平衡時，直驅電機能夠全速率提供穩定的轉矩輸出。
              </li>
                </ul>
              </Project>
            </Fade>
          </Col>
          <Col md={4} className="mt-2 mb-2">
            <Fade bottom delay={600}>
              <Project name="大風扇特色">
                <h5>直驅電機工業大風扇特色</h5>
                <ul>
                  <li>
                    ★直接輸出大轉矩低轉速驅動扇葉，無齒輪、無摩擦、無機械間隙
                    、低噪音，且結構簡單，便於安裝、方便維護，可以大大增加風
                    扇傳動的效率。
              </li>
                  <li>
                    ★大轉矩，高剛性、低轉速平穩，體積小，結構緊湊、功率密度大。
              </li>
                  <li>
                    ★取代減速機構，噪音低、功率因數高、降低設備成本。
              </li>
                  <li>
                    ★全速負載範圍內保持高效率，節能省電。
              </li>
                  <li>
                    ★大幅減少日常維護工作量，提高MTBF（平均無故障時間）指標。
              </li>
                </ul>
              </Project>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Section.Container >
  )
}

export default Projects
