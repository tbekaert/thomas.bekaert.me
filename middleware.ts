import { NextRequest, NextResponse } from 'next/server'

import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

import { defaultLang, langs } from '@/i18n'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getLang(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language')

  if (!acceptLanguage) return defaultLang

  const languages = new Negotiator({
    headers: { 'accept-language': acceptLanguage },
  }).languages()

  return match(languages, langs, defaultLang)
}

export function middleware(request: NextRequest) {
  return
  // Uncomment the following line to enable language detection and redirection when adding new languages
  // const { pathname } = request.nextUrl
  // const pathnameHasLang = langs.some(
  //   lang => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`,
  // )

  // if (pathnameHasLang) return

  // const lang = getLang(request)
  // request.nextUrl.pathname = `/${lang}${pathname}`

  // return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/'],
}
