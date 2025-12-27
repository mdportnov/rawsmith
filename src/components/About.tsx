'use client'

import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('about')

  return (
    <section id="about" className="py-20 md:py-32 bg-dark-lighter relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-olive/30 to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-light text-cream mb-10 md:mb-12 text-center tracking-wide">
          {t('title')}
        </h2>

        <div className="space-y-6 md:space-y-8 text-center">
          <p className="text-cream/60 text-base md:text-lg leading-relaxed">
            {t('description')}
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className="w-8 md:w-12 h-px bg-olive/50" />
            <div className="w-1.5 h-1.5 bg-olive rounded-full" />
            <span className="w-8 md:w-12 h-px bg-olive/50" />
          </div>

          <p className="text-olive/80 italic text-base md:text-lg px-4">
            "{t('philosophy')}"
          </p>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-3 gap-4 md:gap-8 text-center">
          {[
            { num: '15+', label: 'Origins' },
            { num: '500+', label: 'Students' },
            { num: '50+', label: 'Partners' },
          ].map(({ num, label }) => (
            <div key={label} className="p-4 md:p-6">
              <div className="text-2xl md:text-4xl font-light text-olive mb-1 md:mb-2">{num}</div>
              <div className="text-cream/40 text-xs md:text-sm tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
