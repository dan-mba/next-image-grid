import React from 'react'
import Head from 'next/head'
import ImgCard from '../components/ImgCard'
import {getImages} from '../util/database'
import styles from './index.module.css'

export async function getStaticProps() {
  const images = await getImages();

  if (!images) {
    return {
      notFound: true
    };
  }

  return { 
    props: {
      images: JSON.parse(JSON.stringify(images))
    }
  };
}

const Home = ({images}) => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <h1 className={styles.heading}>My Career in Pictures</h1>
        <section className={styles.grid}>
          { images.map(image => <ImgCard {...image} key={image.id}/>) }
        </section>
      </main>
    </div>
  )
}

export default Home
