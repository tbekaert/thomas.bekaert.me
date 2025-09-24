import 'server-only'

import { Lang } from '@/i18n'

const datas = {
  en: () => import('./en.json').then(module => module.default),
}

export const getData = async (lang: Lang) => {
  return datas[lang]()
}
