import { getData } from '@/data'

import styles from './Header.module.css'
import { SkipTo } from './SkipTo'

export const Header = async () => {
  const data = await getData('en')
  return (
    <>
      <header className={styles.header}>
        <SkipTo />
        <h1 className={styles.title}>{data.header.title}</h1>
        <h2 className={styles.subtitle}>{data.header.subtitle}</h2>
      </header>
      <section className={styles.descriptionContainer} role='complementary'>
        <p className={styles.description}>{data.header.description}</p>
        <hr />
      </section>
    </>
  )
}
