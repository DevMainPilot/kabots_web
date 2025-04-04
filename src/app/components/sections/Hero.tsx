'use client';
import { motion } from 'framer-motion';
import { useTranslations } from '../../hooks/useTranslations';
import { fadeInUp } from '../../utils/animations';
import { Lang } from '../../types';

interface HeroProps {
  lang: Lang;
}

export default function Hero({ lang }: HeroProps) {
  const t = useTranslations(lang);

  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-700 py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        className="max-w-6xl mx-auto px-4 text-center relative z-10"
      >
        <motion.h1 
          variants={fadeInUp} 
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p 
          variants={fadeInUp} 
          className="text-xl md:text-2xl text-indigo-100 mb-10 max-w-3xl mx-auto"
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.div variants={fadeInUp}>
          <a 
            href="#contact" 
            className="bg-white text-indigo-700 font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 inline-block"
          >
            {t('cta.start')}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}