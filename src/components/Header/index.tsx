import styles from './styles.module.scss'

export const Header = () => (
  <header className={styles.container}>
    <img src="logo.png" alt="Logo da Disney" />
    <nav className={styles.navigation}>
      <img src="menu.svg" alt="Menu Hamburguer " />
    </nav>
  </header>
)
