'use client';
import { useState, useEffect } from 'react';
import { useTranslations } from '../../hooks/useTranslations';
import { Lang } from '../../types';

interface HeaderProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations(lang);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'} sticky top-0 z-50 transition-all duration-300`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-600 flex items-center">
            <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Kabots
          </a>
          
          {/* Menú per a mòbil */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Menú per a desktop */}
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors">{t('nav.services')}</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">{t('nav.about')}</a>
            <a href="#maintenance" className="text-gray-700 hover:text-indigo-600 transition-colors">{t('nav.maintenance')}</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">{t('nav.contact')}</a>
          </div>

          <div className="hidden md:flex space-x-2">
            <button 
              onClick={() => setLang('ca')} 
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${lang === 'ca' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              CA
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${lang === 'en' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>

      {/* Menú mòbil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            <a href="#services" className="text-gray-700 hover:text-indigo-600 py-2" onClick={() => setMenuOpen(false)}>
              {t('nav.services')}
            </a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 py-2" onClick={() => setMenuOpen(false)}>
              {t('nav.about')}
            </a>
            <a href="#maintenance" className="text-gray-700 hover:text-indigo-600 py-2" onClick={() => setMenuOpen(false)}>
              {t('nav.maintenance')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 py-2" onClick={() => setMenuOpen(false)}>
              {t('nav.contact')}
            </a>
            <div className="flex space-x-2 pt-2">
              <button 
                onClick={() => setLang('ca')} 
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${lang === 'ca' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                CA
              </button>
              <button 
                onClick={() => setLang('en')} 
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${lang === 'en' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}