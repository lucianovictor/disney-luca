import movies from 'data/movies.json'

import styles from './styles.module.scss'

export const Movies = () => (
  <section className={styles.container}>
    <h2>Movies</h2>
    <div className={styles.movies}>
      {movies.map(movies => (
        <div className={styles.movie} key={movies.name}>
          <span>
            <img src={movies.image} alt={`imagens dos filmes ${movies.name}`} />
          </span>
          <strong>{movies.name}</strong>
          <p>{movies.category}</p>
        </div>
      ))}
    </div>
  </section>
)
