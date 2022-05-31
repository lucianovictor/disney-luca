import styles from './styles.module.scss'

export const Header = () => (
  <div className={styles.container}>
    <header>
      <img src="logo.png" alt="Logo da Disney" />
      <button type="button" className={styles.button__menu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  </div>
)
