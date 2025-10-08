'use client';

import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Summary from './components/sections/Summary';
import Services from './components/sections/Services';
import AppsPlans from './components/sections/AppsPlans';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import { Lang } from './types';

export default function Home() {
  const [lang, setLang] = useState<Lang>('ca');

  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;
      const stored = window.localStorage.getItem('kabots_lang');
      if (stored) {
        setLang(stored as Lang);
        (window as any).appLang = stored;
        return;
      }
      if ((window as any).appLang) {
        setLang((window as any).appLang as Lang);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const persistLang = (l: Lang) => {
    setLang(l);
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('kabots_lang', l);
        (window as any).appLang = l;
      }
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
  <Header lang={lang} setLang={persistLang} />
      <Hero lang={lang} />
      <Summary lang={lang} />
      <Testimonials lang={lang} />
      <Services lang={lang} />
      <AppsPlans lang={lang} />       
      <Contact lang={lang} />
  <Footer lang={lang} setLang={persistLang} />
    </div>
  );
}