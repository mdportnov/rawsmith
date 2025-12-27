'use client'

import { useTranslations } from 'next-intl'

const origins = [
  { key: 'ethiopia', color: '#E63946' },
  { key: 'colombia', color: '#F4A261' },
  { key: 'kenya', color: '#2A9D8F' },
  { key: 'guatemala', color: '#E9C46A' },
  { key: 'brazil', color: '#264653' },
  { key: 'yemen', color: '#9B2335' },
]

export default function Coffee() {
  const t = useTranslations('coffee')

  return (
    <section id="coffee" className="py-20 md:py-32 bg-dark-lighter relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-olive/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-light text-cream mb-3 md:mb-4 text-center tracking-wide">
          {t('title')}
        </h2>
        <p className="text-cream/40 text-sm md:text-base text-center mb-12 md:mb-16">
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {origins.map(({ key, color }) => (
            <div
              key={key}
              className="group relative aspect-[4/3] md:aspect-square rounded-2xl bg-gradient-to-br from-dark to-dark-lighter/50 border border-white/5 hover:border-olive/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                style={{ backgroundColor: color }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full mx-auto mb-3 md:mb-4 group-hover:scale-125 transition-transform duration-300"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-cream/80 text-sm md:text-base group-hover:text-olive transition-colors duration-300 font-light">
                    {t(`origins.${key}`)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <a
            href="#"
            className="inline-block px-8 md:px-10 py-3 md:py-3.5 rounded-full bg-gradient-to-r from-olive to-olive/80 text-dark hover:from-olive hover:to-olive hover:shadow-[0_0_30px_rgba(128,128,0,0.4)] transition-all duration-500 text-sm md:text-base font-medium"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
