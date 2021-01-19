import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

const Style = () => (
  <div>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <style jsx global>{`
      body {
        background-image: url('/128-61.png');
        background-repeat: repeat;
        margin: 0 auto;
        padding: 2%;
        max-width: 1000px;
      }
    `}</style>
  </div>
)

export default Style
