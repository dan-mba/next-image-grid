import {useRouter} from 'next/router'
import styles from './FigImage.module.css'

export default function FigImage({img, original, caption}) {
  const router = useRouter();
  const getLink = (path) => `${router.basePath}${path}`;

  return (
    <figure className={styles.figure}>
      <img src={getLink(`/${img}.jpg`)} className={styles.figureImg} alt={caption} />
      <figcaption className={styles.caption}>
        {!original ? " " :
          <div className={styles.sm}>
            <small>
              <a href={original} className={styles.link}>Original image here</a>
            </small>
          </div>
        }
        <div className="text-center">{caption}</div>
      </figcaption>
    </figure>
  );
}
