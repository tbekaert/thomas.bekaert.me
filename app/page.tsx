import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Sidebar } from '@/components/Sidebar'
import { SkipTo } from '@/components/SkipTo'

import styles from './page.module.css'

export default async function Home() {
  return (
    <div className={styles.page}>
      <SkipTo />
      <Header />
      <Main />
      <Footer />
      <Sidebar />
    </div>
  )
}
