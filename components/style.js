import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'

const Style = () => {
  const router = useRouter();
  const getLink = (path) => `${router.basePath}${path}`;

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style jsx global>{`
        body {
          background-image: url('${getLink('/128-61.png')}');
          background-repeat: repeat;
          margin: 0 auto;
          padding: 2%;
          max-width: 1000px;
        }
      `}</style>
    </div>
  )
}

export default Style
