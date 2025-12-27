'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath || `/${newLocale}`)
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => switchLocale('en')}
        className={`px-2 py-1 rounded transition-colors ${
          locale === 'en' ? 'bg-olive text-cream' : 'text-cream/60 hover:text-cream'
        }`}
      >
        EN
      </button>
      <span className="text-gray-light">/</span>
      <button
        onClick={() => switchLocale('ar')}
        className={`px-2 py-1 rounded transition-colors ${
          locale === 'ar' ? 'bg-olive text-cream' : 'text-cream/60 hover:text-cream'
        }`}
      >
        عربي
      </button>
    </div>
  )
}
