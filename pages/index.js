import React from 'react'
import Head from 'next/head'
import {Container, Row, Col, Card, CardImg, CardBody, CardTitle} from 'reactstrap'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    </Head>

    <Container>
      <Row>
        <Col xs="12" sm="6" md="4" className="colpad">
          <Card>
            <CardImg top width="100%" src="/advantest_93k.jpg" />
            <CardBody>
              <CardTitle>
                Advantest 93000 Test System
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4" className="colpad">
          <Card>
            <CardImg top width="100%" src="/efkoverhead.jpg" />
            <CardBody>
              <CardTitle>
                Former IBM East Fishkill Site
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4" className="colpad">
          <Card>
            <CardImg top width="100%" src="/ibmpoksign.jpg" />
            <CardBody>
              <CardTitle>
                IBM Poughkeepsie Site
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    
    <style jsx global>{`
      div[class*="col"] {
        padding: 15px;
      }
      .card {
        height: 100%;
      }
    `}</style>
  </div>
)

export default Home
