import Image from 'next/image'

import { getData } from '@/data'

import styles from './Sidebar.module.css'

export const Sidebar = async () => {
  const data = await getData('en')
  return (
    <aside className={styles.sidebar}>
      <Image
        src='/profile.jpg'
        width={104}
        height={104}
        sizes='(max-width: 769px) 78px, (max-width: 960px) 104px, 208px'
        alt={data.sidebar.profileAlt}
        className={styles.profilePic}
      />
    </aside>
  )
}
