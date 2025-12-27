'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Hero() {
  const t = useTranslations('hero')

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter/50 to-dark" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-olive/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-olive/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <div className="mb-6 md:mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-olive/20 rounded-full blur-2xl scale-110" />
            <Image
              src="/logo.png"
              alt="Raw Smith"
              width={160}
              height={160}
              className="logo-circle mx-auto relative w-32 h-32 md:w-40 md:h-40"
              priority
            />
          </div>
        </div>

        <p className="text-olive text-base md:text-xl tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4 font-light uppercase">
          {t('tagline')}
        </p>

        <p className="text-cream/50 text-xs md:text-sm tracking-wider mb-10 md:mb-12">
          {t('subtitle')}
        </p>

        <button
          onClick={() => scrollTo('about')}
          className="group relative px-8 md:px-10 py-3 md:py-3.5 rounded-full bg-gradient-to-r from-olive/20 to-olive/10 backdrop-blur-sm border border-olive/40 text-olive hover:from-olive hover:to-olive/90 hover:text-dark hover:border-olive hover:shadow-[0_0_30px_rgba(128,128,0,0.3)] transition-all duration-500 text-sm md:text-base overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            {t('cta')}
            <span className="inline-block group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300">
              →
            </span>
          </span>
        </button>
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-5 h-8 md:w-6 md:h-10 border border-olive/40 rounded-full flex justify-center pt-1.5 md:pt-2">
          <div className="w-0.5 md:w-1 h-2 md:h-3 bg-olive/40 rounded-full" />
        </div>
      </div>
    </section>
  )
}
