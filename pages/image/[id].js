import Head from 'next/head'
import {useRouter} from 'next/router'
import {getImageById, getImages} from "../../util/database"
import styles from "./image.module.css"


const Image = ({image}) => {
  const router = useRouter();
  const getLink = (path) => `${router.basePath}${path}`;

  return (
    <main>
      <Head>
        <title>{image.title}</title>
      </Head>

      <section className={styles.container}>
        <h1 className={styles.heading}>{image.title}</h1>
        <figure className={styles.figure}>
          <img src={getLink(`/${image.img}.jpg`)} className={styles.figureImg} alt={image.caption} />
          <figcaption className={styles.caption}>
            {!image.original ? " " :
              <div className={styles.sm}>
                <small>
                  <a href={image.original}>Original image here</a>
                </small>
              </div>
            }
            <div className="text-center">{image.caption}</div>
          </figcaption>
        </figure>
        {!image.story ? "" :
          <div className={styles.story} dangerouslySetInnerHTML={{__html: image.story}}/>
        }

      </section>

    </main>
  );
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