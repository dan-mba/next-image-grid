import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {Container, Row, Col, Card, CardImg, CardBody, CardTitle} from 'reactstrap'
import {webserver} from '../util/webserver'
import Style from '../components/style'

const Home = ({images}) => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Container className="text-center">
      <h1 className="badge text-center badge-light">My Career in Pictures</h1>
      <Row>
        { images.map(image => 
          <Col xs="12" sm="6" md="4" className="colpad" key={image.id}>
            <Link href="/image/[id]" as={`/image/${image.id}`}>
              <Card>
                <CardImg top width="100%" src={"/"+image.img+"_sm.jpg"} />
                <CardBody>
                  <CardTitle>
                    {image.title}
                  </CardTitle>
                </CardBody>
              </Card>
            </Link>
          </Col>
        )}
      </Row>
    </Container>

    <Style />
    
    <style jsx global>{`
      h1.badge {
        font-size: 2.5rem;
        white-space: normal;
        opacity: 0.8;
      }
      div[class*="col"] {
        padding: 15px;
      }
      .card {
        height: 100%;
        cursor: pointer;
        background-color: rgba(255,255,255,0.8);
      }
      .card:hover {
        color: #ddd;
        background-color: #222;
      }
      div.row {
        justify-content: center;
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
