export const langs = ['en'] as const

export type Lang = (typeof langs)[number]

export const defaultLang = 'en'
