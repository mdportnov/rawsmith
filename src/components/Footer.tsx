'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="py-8 md:py-12 bg-dark-lighter border-t border-gray/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Raw Smith"
              width={36}
              height={36}
              className="logo-circle w-8 h-8 md:w-9 md:h-9"
            />
            <span className="text-cream/40 text-xs md:text-sm">{t('tagline')}</span>
          </div>

          <p className="text-cream/25 text-xs md:text-sm">
            © {new Date().getFullYear()} Raw Smith. {t('rights')}.
          </p>
        </div>
      </div>
    </footer>
  )
}
