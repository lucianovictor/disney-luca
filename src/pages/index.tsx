import { Header } from 'components/Header'
import { Main } from 'components/Main'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  )
}
