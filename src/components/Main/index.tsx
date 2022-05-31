import { Movies } from 'components/Movies'

import styles from './styles.module.scss'

export const Main = () => (
  <main className={styles.container}>
    <section className={styles.movie}>
      <div className={styles.rating}>
        <img src="IMDB-icon.png" alt="" />
        <strong>8.8</strong>
      </div>
      <span>2021 - Kids - Movie</span>
      <h1>Luca</h1>
      <p>
        {' '}
        Luca and Alberto dream of a life of freedom, a life of adventure — and,
        most of all, a life with a Vespa to ride.{' '}
      </p>
    </section>
    <button type="button" className={styles.button}>
      <img src="icons/play.svg" alt="" /> Watch Now
    </button>
    <Movies />
  </main>
)
