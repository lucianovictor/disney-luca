import styles from './styles.module.scss'

export const Main = () => (
  <main className={styles.container}>
    <div className={styles.info}>
      <img src="IMDB-icon.png" alt="" />
      <h1>8.8</h1>
      <h2>2021 - Kids - Movie</h2>
    </div>

    <div className={styles.content}>
      <img src="luca.png" alt="Logo Name Luca " />
      <p>
        Luca and Alberto dream of a life of freedom, a life of adventure — and,
        most of all, a life with a Vespa to ride.{' '}
      </p>
    </div>
    <div className={styles.button}>
      <button type="button">
        <img src="icons/play.svg" alt="" /> Watch Now
      </button>
    </div>
  </main>
)
