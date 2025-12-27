'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const t = useTranslations('nav')
  const [isOpen, setIsOpen] = useState(false)

  const scrollTo = (id: string) => {
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-gray/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Raw Smith"
            width={44}
            height={44}
            className="logo-circle w-10 h-10 md:w-11 md:h-11"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['about', 'services', 'coffee', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-cream/70 hover:text-olive transition-colors text-sm tracking-wide"
            >
              {t(item)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-cream"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-dark-lighter border-t border-gray/10">
          <div className="px-4 py-4 space-y-1">
            {['about', 'services', 'coffee', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-start py-3 px-4 text-cream/70 hover:text-olive hover:bg-dark transition-colors rounded-lg"
              >
                {t(item)}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
