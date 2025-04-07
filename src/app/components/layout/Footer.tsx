'use client';
import { useTranslations } from '../../hooks/useTranslations';
import { Lang } from '../../types';
import { APP_CONFIG } from '../../config/config';

interface FooterProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export default function Footer({ lang, setLang }: FooterProps) {
  const t = useTranslations(lang);

  // Definir els enllaços de xarxes socials
  const socialLinks = {
    linkedin: 'https://www.linkedin.com/company/kabots',
    instagram: 'https://www.instagram.com/kabots_tech/'
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <a href="#" className="text-2xl font-bold text-white flex items-center mb-4">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Kabots
            </a>
            <p className="text-gray-400">{t('footer.description')}</p>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.sections.company.title')}</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">{t('footer.sections.company.links.about')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('footer.sections.company.links.services')}</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">{t('nav.pricing', 'Preus')}</a></li>
              <li><a href="#maintenance" className="text-gray-400 hover:text-white transition-colors">{t('footer.sections.company.links.maintenance')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.sections.company.links.blog')}</a></li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.sections.legal.title')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.sections.legal.links.privacy')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.sections.legal.links.cookies')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.sections.legal.links.terms')}</a></li>
            </ul>
          </div>
          
          {/* Social & Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.sections.social.title')}</h4>
            <div className="flex space-x-4">
              {/* LinkedIn Icon */}
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              
              {/* Instagram Icon */}
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
                </svg>
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-bold text-lg mb-2">{t('footer.sections.social.newsletter.title')}</h4>
              <div className="flex mt-2">
                <input type="email" placeholder={t('footer.sections.social.newsletter.placeholder')} className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none" />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-gray-400">{t('footer.copyright').replace('{year}', APP_CONFIG.copyrightYear.toString())}</p>
            <p className="text-gray-500 text-sm ml-0 md:ml-4 mt-2 md:mt-0">
              {t('footer.version', 'Versió')} {APP_CONFIG.version}
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button 
              onClick={() => setLang('ca')} 
              className={`px-3 py-1 rounded-full text-sm ${lang === 'ca' ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
            >
              CA
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`px-3 py-1 rounded-full text-sm ${lang === 'en' ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}