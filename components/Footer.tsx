import { JSX, SVGProps } from 'react'

import { default as NextLink } from 'next/link'

import { getData } from '@/data'
import GitHubIcon from '@/icons/GitHub'
import LinkedInIcon from '@/icons/LinkedIn'

import styles from './Footer.module.css'

const icons: Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
}

export const Footer = async () => {
  const data = await getData('en')

  return (
    <footer className={styles.footer} id='contact'>
      <Infos
        email={data.footer.email}
        phone={data.footer.phone}
        location={data.footer.location}
      />

      <hr />

      <Bullets bullets={data.footer.bullets} />

      <hr />

      <ul className={styles.list}>
        {data.footer.websites.map(website => (
          <Website key={website.url} website={website} />
        ))}
      </ul>
    </footer>
  )
}

type InfosProps = {
  email: string
  phone: string
  location: string
}

function Infos({ email, phone, location }: InfosProps) {
  const emailUrl = `mailto:${email}`
  const phoneUrl = `tel:${phone.replace(/\s/g, '')}`
  return (
    <ul className={styles.infos}>
      <li>
        <NextLink href={emailUrl}>
          <strong>{email}</strong>
        </NextLink>
      </li>
      <li>
        <NextLink href={phoneUrl}>{phone}</NextLink>
      </li>
      <li>{location}</li>
    </ul>
  )
}

type BulletsProps = { bullets: string[] }

function Bullets({ bullets }: BulletsProps) {
  return (
    <ul className={styles.list}>
      {bullets.map(bullet => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  )
}

type WebsiteProps = {
  website: {
    icon: string
    url: string
    text: string
  }
}

function Website({ website }: WebsiteProps) {
  const Icon = icons[website.icon]

  if (!Icon) throw new Error(`Unknown icon: ${website.icon}`)

  return (
    <li key={website.url}>
      <NextLink href={website.url} target='_blank' rel='noopener noreferrer'>
        <Icon />
        <span>{website.text}</span>
      </NextLink>
    </li>
  )
}
