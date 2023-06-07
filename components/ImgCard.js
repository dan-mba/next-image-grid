import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from './ImgCard.module.css'

export default function ImgCard({id, img, title}) {
  const router = useRouter();
  const getLink = (path) => `${router.basePath}${path}`;

  return (
    <Link href={`/image/${id}`} className={styles.link}>
      <div className={styles.card}>
        <img className={styles.img} src={getLink(`/${img}_sm.jpg`)} alt=""/>
        <p className={styles.p}>{title}</p>
      </div>
    </Link>
  );
}
