import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { locales, defaultLocale } from './src/i18n/config'

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/', '/((?!_next|api|favicon.ico|logo.png|.*\\..*).*)', '/(en|ar)/:path*']
}
