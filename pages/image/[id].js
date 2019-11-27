import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import {Container} from 'reactstrap'
import {webserver} from '../../util/webserver'

const Image = ({image}) => (
  <div>
    <Head>
      <title>{image.Title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    </Head>

    <Container>
      <h1 className="text-center h2">{image.Title}</h1>
      <figure className="text-center">
        <img src={"/"+image.Img} className="figure-img img-fluid"/>
        <figcaption>{image.Story}</figcaption>
      </figure>
    </Container>
  </div>
);

Image.propTypes = {
  image: PropTypes.object
}

Image.getInitialProps = async ({query}) => {
  const res = await fetch(`${webserver}/api/images/${query.id}`)
  const json = await res.json()
  return { image: json.image }
}

export default Image;