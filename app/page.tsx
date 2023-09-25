import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hola mundo</h1>

      <Link href={'/about'}>About Page</Link>
    </main>
  )
}
