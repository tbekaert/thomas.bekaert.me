export const langs = ['en', 'fr'] as const

export type Lang = (typeof langs)[number]

export const defaultLang = 'en'
