'use client';
import { useState, useEffect } from 'react';
import { Lang } from '../types';
import { useTranslations } from '../hooks/useTranslations';
import { useRouter } from 'next/navigation';

export default function CookiesPage() {
  const [lang, setLang] = useState<Lang>('ca');
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('kabots_lang');
      if (stored) setLang(stored as Lang);
      else if ((window as any).appLang) setLang((window as any).appLang as Lang);
    } catch (e) {}
  }, []);

  const t = useTranslations(lang);
  const sections = t('cookiesPage.sections', {});

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-3xl font-bold">{t('cookiesPage.title')}</h1>
        <button aria-label="Tancar" className="ml-4 rounded-full bg-gray-100 hover:bg-gray-200 p-2 shadow-sm" onClick={() => { if (window.history.length > 1) history.back(); else window.location.href = '/'; }}>
          <span className="sr-only">Tancar</span>
          <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="prose max-w-none">
        {sections && Object.values(sections).map((section: any, idx: number) => (
          <section key={idx} className="mb-4">
            <h2 className="font-semibold">{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
