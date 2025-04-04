'use client';
import { useState, useRef, FormEvent } from 'react';
import { useTranslations } from '../../hooks/useTranslations';
import { Lang } from '../../types';
import { EMAIL_CONFIG } from '../../config/email';
import emailjs from '@emailjs/browser';

// Funcions de validació bàsiques
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isSpamContent = (text: string): boolean => {
  const spamPatterns = [
    /https?:\/\//i,  // URLs
    /\$+/,           // Símbols de diners
    /viagra/i,       // Paraules de spam comunes
    /casino/i,
    /porn/i
  ];

  return spamPatterns.some(pattern => pattern.test(text));
};

interface ContactProps {
  lang: Lang;
}

export default function Contact({ lang }: ContactProps) {
  const t = useTranslations(lang);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setLoading(true);
    setError('');
    setSuccess(false);
  
    // Obtenir les dades del formulari
    const formData = new FormData(formRef.current);
    const name = formData.get('user_name') as string;
    const email = formData.get('user_email') as string;
    const message = formData.get('message') as string;

    // Validacions bàsiques
    if (name.trim().length < 2) {
      setError(t('contact.validation.shortName', 'El nom és massa curt'));
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError(t('contact.validation.invalidEmail', 'Correu electrònic no vàlid'));
      setLoading(false);
      return;
    }

    if (message.trim().length < 10) {
      setError(t('contact.validation.shortMessage', 'El missatge és massa curt'));
      setLoading(false);
      return;
    }

    // Verificació bàsica de spam
    if (isSpamContent(name) || isSpamContent(email) || isSpamContent(message)) {
      setError(t('contact.validation.suspiciousContent', 'S\'han detectat continguts sospitosos'));
      setLoading(false);
      return;
    }

    try {
      // 1. Enviar el formulari a l'administrador
      const result = await emailjs.sendForm(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.ADMIN_TEMPLATE_ID,
        formRef.current,
        EMAIL_CONFIG.PUBLIC_KEY
      );
  
      if (result.text === 'OK' || result.status === 200) {
        try {
          // 2. Enviar l'autoresposta al client
          const templateParams = {
            user_name: name,
            user_email: email,
            user_company: formData.get('user_company') as string || '',
            message: message
          };
          
          await emailjs.send(
            EMAIL_CONFIG.SERVICE_ID,
            EMAIL_CONFIG.USER_TEMPLATE_ID,
            templateParams,
            EMAIL_CONFIG.PUBLIC_KEY
          );
        } catch (autoReplyError) {
          console.warn('Auto-reply failed but main message was sent:', autoReplyError);
        }
        
        // Indicar que tot ha anat bé i reiniciar el formulari
        setSuccess(true);
        formRef.current.reset();
      } else {
        throw new Error(`Failed with status: ${result.status}, text: ${result.text}`);
      }
    } catch (error: any) {
      console.error('Error details:', error);
      
      setError(t('contact.errorMessage', 'Hi ha hagut un error. Intenta-ho de nou més tard.'));
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-semibold tracking-wide uppercase">
            {t('contact.sectionTitle', 'Contacte')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">{t('contact.title')}</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/5 bg-indigo-600 text-white p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h3>
              <p className="mb-8">{t('contact.info.description')}</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">{t('contact.info.phone.label')}</h4>
                    <p>{t('contact.info.phone.value')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">{t('contact.info.email.label')}</h4>
                    <p>{t('contact.info.email.value')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">{t('contact.info.location.label')}</h4>
                    <p dangerouslySetInnerHTML={{ __html: t('contact.info.location.address') }}></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8 md:p-12">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Missatge d'èxit */}
                {success && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong className="font-bold">{t('contact.successMessageTitle', 'Gràcies! ')}</strong>
                    <span className="block sm:inline">{t('contact.successMessage')}</span>
                  </div>
                )}
                
                {/* Missatge d'error */}
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong className="font-bold">{t('contact.errorMessageTitle', 'Error: ')}</strong>
                    <span className="block sm:inline">{error}</span>
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="user_name" className="block text-gray-700 mb-2 font-medium">{t('contact.name')}</label>
                    <input 
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-colors" 
                      placeholder={t('contact.placeholders.name')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="user_email" className="block text-gray-700 mb-2 font-medium">{t('contact.email')}</label>
                    <input 
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-colors" 
                      placeholder={t('contact.placeholders.email')}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="user_company" className="block text-gray-700 mb-2 font-medium">{t('contact.company')}</label>
                  <input 
                    type="text"
                    id="user_company"
                    name="user_company"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-colors" 
                    placeholder={t('contact.placeholders.company')}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">{t('contact.message')}</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-colors" 
                    placeholder={t('contact.placeholders.message')}
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={loading}
                  className={`bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg w-full md:w-auto flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? t('contact.sendingMessage', 'Enviant...') : t('cta.send')}
                  {!loading && (
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}