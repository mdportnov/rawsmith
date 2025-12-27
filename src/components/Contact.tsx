'use client'

import { useTranslations } from 'next-intl'

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/UhMQEYGLGo7uK6tK7'
const PHONE_NUMBER = '962797362526'

export default function Contact() {
  const t = useTranslations('contact')

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-light text-cream mb-12 md:mb-16 tracking-wide">
          {t('title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-14">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 md:p-8 rounded-2xl bg-gradient-to-br from-dark-lighter/80 to-dark-lighter/40 backdrop-blur-sm border border-white/5 hover:border-olive/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500"
          >
            <div className="text-olive/80 mb-4 md:mb-5 group-hover:scale-110 group-hover:text-olive transition-all duration-300">
              <svg className="w-7 h-7 md:w-8 md:h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-cream text-base md:text-lg mb-2">{t('address')}</p>
            <p className="text-cream/40 text-sm mb-3">{t('hours')}</p>
            <span className="text-olive/70 text-sm group-hover:text-olive transition-colors">
              {t('getDirections')} →
            </span>
          </a>

          <a
            href={`https://wa.me/${PHONE_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 md:p-8 rounded-2xl bg-gradient-to-br from-dark-lighter/80 to-dark-lighter/40 backdrop-blur-sm border border-white/5 hover:border-olive/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500"
          >
            <div className="text-olive/80 mb-4 md:mb-5 group-hover:scale-110 group-hover:text-olive transition-all duration-300">
              <svg className="w-7 h-7 md:w-8 md:h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="text-cream text-base md:text-lg mb-2" dir="ltr">{t('phone')}</p>
            <p className="text-cream/40 text-sm mb-3">{t('callUs')}</p>
            <span className="text-olive/70 text-sm group-hover:text-olive transition-colors">
              WhatsApp →
            </span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <a
            href="https://instagram.com/rawsmith.jo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-olive/70 hover:text-olive transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
            </svg>
            <span className="text-sm md:text-base tracking-wide">{t('instagram')}</span>
          </a>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-olive/70 hover:text-olive transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="text-sm md:text-base tracking-wide">{t('leaveReview')}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
