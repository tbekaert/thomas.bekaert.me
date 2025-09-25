import { default as NextLink } from 'next/link'

import styles from './SktipTo.module.css'

export const SkipTo = () => {
  return (
    <div className={styles.skipTo}>
      Skip to <NextLink href='#work'>work experience</NextLink>,{' '}
      <NextLink href='#hobbies'>hobbies</NextLink> or{' '}
      <NextLink href='#contact'>contact infos</NextLink>
    </div>
  )
}
