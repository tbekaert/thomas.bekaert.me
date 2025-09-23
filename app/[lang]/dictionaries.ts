import 'server-only'

import { Lang } from '@/i18n'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then(module => module.default),
  fr: () => import('./dictionaries/fr.json').then(module => module.default),
}

export const getDictionary = async (lang: Lang) => dictionaries[lang]()
