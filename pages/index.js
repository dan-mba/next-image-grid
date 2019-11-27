import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import {Container, Row, Col, Card, CardImg, CardBody, CardTitle} from 'reactstrap'
import {webserver} from '../util/webserver'

const Home = ({images}) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    </Head>

    <Container>
      <Row>
        { images.map(image => 
          <Col xs="12" sm="6" md="4" className="colpad" key={image.Id}>
            <Link href="/image/[id]" as={`/image/${image.Id}`}>
              <Card>
                <CardImg top width="100%" src={image.Img} />
                <CardBody>
                  <CardTitle>
                    {image.Title}
                  </CardTitle>
                </CardBody>
              </Card>
            </Link>
          </Col>
        )}
      </Row>
    </Container>
    
    <style jsx global>{`
      div[class*="col"] {
        padding: 15px;
      }
      .card {
        height: 100%;
        cursor: pointer;
      }
      .card:hover {
        background-color: #ccc;
      }
    `}</style>
  </div>
)

Home.propTypes = {
  images: PropTypes.array
}

Home.getInitialProps = async () => {
  const res = await fetch(`${webserver}/api/images`)
  const json = await res.json()
  return { images: json.images }
}

export default Home
