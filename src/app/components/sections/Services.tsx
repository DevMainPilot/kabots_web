'use client';
import { motion } from 'framer-motion';
import { useTranslations } from '../../hooks/useTranslations';
import { Lang } from '../../types';

interface ServicesProps {
  lang: Lang;
}

export default function Services({ lang }: ServicesProps) {
  const t = useTranslations(lang);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold tracking-wide uppercase">{t('services.title')}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">{t('services.subtitle')}</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>
        
        {/* Prompting Service */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-indigo-600"
          >
            <div className="md:flex items-start">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('services.prompting.title')}
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {t('services.prompting.description')}
                </p>
                <ul className="mb-8 space-y-2">
                  {t('services.prompting.benefits').map((benefit: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">
                  {t('cta.contact')}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
