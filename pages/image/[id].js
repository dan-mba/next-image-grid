import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import {Container} from 'reactstrap'
import {webserver} from '../../util/webserver'
import Style from '../../components/style'

const Image = ({image}) => (
  <div>
    <Head>
      <title>{image.title}</title>
    </Head>

    <Container className="my-container">
      <h1 className="text-center h2">{image.title}</h1>
      <figure>
        <img src={"/"+image.img+".jpg"} className="figure-img img-fluid"/>
        <figcaption className="lead">
          {!image.original ? " " :
            <div className="sm">
              <small>
                <a href={image.original}>Original image here</a>
              </small>
            </div>
          }
          <div className="text-center">{image.caption}</div>
        </figcaption>
      </figure>
      {!image.story ? "" :
        <div className="story" dangerouslySetInnerHTML={{__html: image.story}}/>
      }

    </Container>

    <Style />

    <style jsx global>{`
      .my-container {
        background-color: rgba(255,255,255,0.8);
        border-radius: 1vh;
        padding: 2% 0;
        color: #111;
      }
      .sm{
        font-size: 75%;
        line-height: 1;
      }
      a {
        color: inherit;
        text-decoration: underline;
      }
      img.figure-img {
        margin: 0;
      }
      .story {
        padding: 2%
      }
    `}</style>
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