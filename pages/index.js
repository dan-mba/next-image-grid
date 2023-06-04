import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {getImages} from '../util/database'
import styles from './index.module.css'

const Home = ({images}) => {
  const router = useRouter();
  const getLink = (path) => `${router.basePath}${path}`;
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <h1 className={styles.heading}>My Career in Pictures</h1>
        <section className={styles.grid}>
          { images.map(image => 
            <Link href={`/image/${image.id}`} className={styles.link} key={image.id}>
              <div className={styles.card}>
                <img className={styles.img} src={getLink(`/${image.img}_sm.jpg`)} alt=""/>
                <p className={styles.p}>{image.title}</p>
              </div>
            </Link>
          )}
        </section>
      </main>
    </div>
  )
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
