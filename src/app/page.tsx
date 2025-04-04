'use client';

import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Summary from './components/sections/Summary';
import Services from './components/sections/Services';
import AppsPlans from './components/sections/AppsPlans';
import Maintenance from './components/sections/Maintenance';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import { Lang } from './types';

export default function Home() {
  const [lang, setLang] = useState<Lang>('ca');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Summary lang={lang} />
      <Testimonials lang={lang} />
      <Services lang={lang} />
      <AppsPlans lang={lang} />
      <Maintenance lang={lang} />      
      <Contact lang={lang} />
      <Footer lang={lang} setLang={setLang} />
    </div>
  );
}