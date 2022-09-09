import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import {Container} from 'react-bootstrap'
import {getImageById, getImages} from "../../util/database"
import Style from '../../components/style'

const Image = ({image}) => {
  const router = useRouter();
  const getLink = (path) => `${router.basePath}${path}`;

  return (
    <div>
      <Head>
        <title>{image.title}</title>
      </Head>

      <Container className="my-container">
        <h1 className="text-center h2">{image.title}</h1>
        <figure>
        <img src={getLink(`/${image.img}.jpg`)} className="figure-img img-fluid" alt={image.caption} />
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
}

Image.propTypes = {
  image: PropTypes.object
}

export async function getStaticPaths() {
  const images = await getImages();

  const paths = images.map(image => `/image/${image.id}`);

  return {
    paths: paths,
    fallback: false
  };
}

export async function getStaticProps({params}) {
  const image = await getImageById(params.id);

  if(!image) {
    return {
      notFound: true
    };
  }

  return {
    props: {image}
  };
}

export default Image;