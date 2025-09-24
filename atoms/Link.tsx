import { LinkProps, default as NextLink } from 'next/link'

import { Lang } from '@/i18n'

export const Link = ({
  lang,
  ...props
}: LinkProps & { children?: React.ReactNode | undefined; lang?: Lang }) => {
  // If no lang is provided, return a regular NextLink
  if (!lang) return <NextLink {...props} />

  // Prefix the href with the lang if it's a string
  if (typeof props.href === 'string')
    return <NextLink {...props} href={`/${lang}${props.href}`} />

  // If the href is an object, modify its pathname
  return (
    <NextLink
      {...props}
      href={{ ...props.href, pathname: `/${lang}${props.href.pathname}` }}
    />
  )
}
