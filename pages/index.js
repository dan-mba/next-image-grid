import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import {Container, Row, Col, Card} from 'react-bootstrap'
import {getImages} from '../util/database'
import Style from '../components/style'

const Home = ({images}) => {
  const router = useRouter();
  const getLink = (path) => `${router.basePath}${path}`;
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Container className="text-center">
        <h1 className="badge text-center">My Career in Pictures</h1>
        <Row className="justify-content-center">
          { images.map(image => 
            <Col xs="12" sm="6" md="4" className="colpad" key={image.id}>
              <Link href="/image/[id]" as={`/image/${image.id}`}>
                <Card>
                  <Card.Img variant="top" width="100%" src={getLink(`/${image.img}_sm.jpg`)} />
                  <Card.Body className="d-flex flex-column justify-content-end">
                    <Card.Title>
                      {image.title}
                    </Card.Title>
                  </Card.Body>
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
          opacity: 0.9;
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
      `}</style>
    </div>
  )
}

Home.propTypes = {
  images: PropTypes.array
}

export async function getStaticProps() {
  const images = await getImages();

  if (!images) {
    return {
      notFound: true
    };
  }

  return JSON.parse(JSON.stringify({ 
    props: {images}
  }));
}

export default Home
