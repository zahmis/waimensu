import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wai history</title>
        <meta name="description" content="wai history" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Wai history
        </h1>

        <div className={styles.grid}>
        </div>
      </main>
      <footer className={styles.footer}>
        ©️ 2021 waimensu
      </footer>
    </div>
  )
}
