'use client';
import { motion } from 'framer-motion';
import { useTranslations } from '../../hooks/useTranslations';
import { Lang } from '../../types';

interface MaintenanceProps {
  lang: Lang;
}

export default function Maintenance({ lang }: MaintenanceProps) {
  const t = useTranslations(lang);

  return (
    <section id="maintenance" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold tracking-wide uppercase">Manteniment</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">{t('services.maintenance.title')}</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {t('services.maintenance.description')}
          </p>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {['basic', 'standard', 'premium'].map((planKey, index) => {
            const plan = t(`services.maintenance.plans.${planKey}`);
            const isPopular = plan.popular === true;
            
            return (
              <motion.div 
                key={planKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all ${isPopular ? 'border-2 border-indigo-600 relative transform md:-translate-y-4' : 'border border-gray-100'}`}
              >
                {isPopular && (
                  <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
                    <span className="bg-indigo-600 text-white text-xs font-bold py-1 px-4 rounded-full">{t('services.maintenance.popular')}</span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h4 className="text-xl font-bold text-gray-900">{plan.title}</h4>
                  <div className="text-3xl font-bold text-indigo-600 mt-4">
                    {plan.price}
                  </div>
                  <p className="text-gray-500 mt-2">{plan.tagline}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature: string, index: number) => (
                    <li 
                      key={index}
                      className="flex items-start text-gray-700"
                    >
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>                
                <a 
                  href="#contact" 
                  className={`w-full ${isPopular ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-800 hover:bg-gray-900'} text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center`}
                >
                  {plan.cta}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
