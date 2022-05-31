import styles from './styles.module.scss'

export const Movies = () => (
  <aside className={styles.movies}>
    <h2>Movies</h2>
    <div className={styles.content}>
      <ul>
        <li>
          <span>Kids</span>
          <strong>Spirit Untamed</strong>

          <button type="button">
            <img src="icons/player-video.svg" alt="Icon play button" />
          </button>
        </li>

        <li>
          <span>Kids</span>
          <strong>Spirit Untamed</strong>

          <button type="button">
            <img src="icons/player-video.svg" alt="Icon play button" />
          </button>
        </li>
        <li>
          <span>Kids</span>
          <strong>Spirit Untamed</strong>

          <button type="button">
            <img src="icons/player-video.svg" alt="Icon play button" />
          </button>
        </li>
        <li>
          <span>Kids</span>
          <strong>Spirit Untamed</strong>

          <button type="button">
            <img src="icons/player-video.svg" alt="Icon play button" />
          </button>
        </li>
      </ul>
    </div>
  </aside>
)
