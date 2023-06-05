import Head from 'next/head'
import {useRouter} from 'next/router'
import 'modern-normalize/modern-normalize.css';
import '../css/styles.css';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const getLink = (path) => `${router.basePath}${path}`;
  return (
    <>
      <Head>
        <link rel="icon" href={`${getLink("/favicon.ico")}`} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
