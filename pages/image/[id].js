import Head from 'next/head'
import FigImage from '../../components/FigImage'
import {getImageById, getImages} from "../../util/bsqlite3"
import styles from "./image.module.css"

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

const Image = ({image}) => {
  return (
    <main>
      <Head>
        <title>{image.title}</title>
      </Head>

      <section className={styles.container}>
        <h1 className={styles.heading}>{image.title}</h1>
        <FigImage 
          img={image.img}
          caption={image.caption}
          original={image.original}
        />
        {!image.story ? "" :
          <div className={styles.story} dangerouslySetInnerHTML={{__html: image.story}}/>
        }
      </section>
    </main>
  );
}

export default Image;
