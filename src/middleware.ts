import { match as matchLocale } from '@formatjs/intl-localematcher'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import Negotiator from 'negotiator'

import { i18n } from '@/app/languages'

const supportedLanguages = i18n.languages.map(l => l.id)

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages() ?? []

  const locales: string[] = supportedLanguages
  return matchLocale(languages, locales, i18n.base)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // locale ignore paths
  if (['/studio/desk'].includes(pathname)) return

  const isPathnameWithoutLocale = supportedLanguages.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (isPathnameWithoutLocale) {
    const locale = getLocale(request)

    const prevParsedURL = new URL(request.url)
    const prevFilterParam = prevParsedURL.searchParams.get('filter')

    const nextURL = new URL(`/${locale}/${pathname}`, request.url)
    prevFilterParam && nextURL.searchParams.set('filter', prevFilterParam)

    return NextResponse.redirect(nextURL)
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next|.*\\..*).*)']
}
