import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import { getData } from '@/data'

const InterFont = Inter({
  subsets: ['latin'],
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData('en')

  return {
    title: data.metadata.title,
    description: data.metadata.description,
  }
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={InterFont.className}>{children}</body>
    </html>
  )
}
