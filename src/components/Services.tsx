'use client'

import { useTranslations } from 'next-intl'

const icons = {
  academy: (
    <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  ),
  roasting: (
    <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  ),
  distribution: (
    <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
}

export default function Services() {
  const t = useTranslations('services')

  const services = [
    { key: 'academy', icon: icons.academy },
    { key: 'roasting', icon: icons.roasting },
    { key: 'distribution', icon: icons.distribution },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-dark relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-light text-cream mb-12 md:mb-16 text-center tracking-wide">
          {t('title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map(({ key, icon }) => (
            <div
              key={key}
              className="group p-6 md:p-8 rounded-2xl bg-gradient-to-br from-dark-lighter/80 to-dark-lighter/40 backdrop-blur-sm border border-white/5 hover:border-olive/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="text-olive/70 mb-5 md:mb-6 group-hover:text-olive group-hover:scale-110 transition-all duration-300 origin-left rtl:origin-right">
                {icon}
              </div>
              <h3 className="text-lg md:text-xl text-cream mb-3 md:mb-4 font-light">
                {t(`${key}.title`)}
              </h3>
              <p className="text-cream/50 text-sm md:text-base leading-relaxed">
                {t(`${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
