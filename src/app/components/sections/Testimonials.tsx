'use client';
import { motion } from 'framer-motion';
import { useTranslations } from '../../hooks/useTranslations';
import { fadeInLeft, fadeInRight } from '../../utils/animations';
import { Lang } from '../../types';

interface OurStoryProps {
  lang: Lang;
}

export default function OurStory({ lang }: OurStoryProps) {
  const t = useTranslations(lang);

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-semibold tracking-wide uppercase">{t('ourStory.title')}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">{t('ourStory.subtitle')}</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="bg-gray-50 p-6 rounded-xl shadow-sm flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">{t('ourStory.mission.title')}</h3>
            <p className="text-gray-700 leading-relaxed">
              {t('ourStory.mission.description')}
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="bg-gray-50 p-6 rounded-xl shadow-sm flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">{t('ourStory.founders.title')}</h3>
            <p className="text-gray-700 leading-relaxed">
              {t('ourStory.founders.description')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}