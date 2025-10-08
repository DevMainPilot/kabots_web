'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { Lang } from '../types';

export default function CookieBanner() {
  const [lang, setLang] = useState<Lang>('ca');
  useEffect(() => {
    try {
      const stored = typeof window !== 'undefined' ? window.localStorage.getItem('kabots_lang') : null;
      if (stored) setLang(stored as Lang);
      else if (typeof window !== 'undefined' && (window as any).appLang) setLang((window as any).appLang as Lang);
    } catch (e) {
      // ignore
    }
  }, []);

  const t = useTranslations(lang);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = typeof window !== 'undefined' ? window.localStorage.getItem('kabots_cookies_choice') : null;
      if (!stored) setVisible(true);
    } catch (e) {
      setVisible(true);
    }
  }, []);

  // react to language change events so banner updates immediately
  useEffect(() => {
    const onLang = (e: any) => {
      try { if (e?.detail?.lang) setLang(e.detail.lang as Lang); }
      catch (e) {}
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'kabots_lang' && e.newValue) setLang(e.newValue as Lang);
      if (e.key === 'kabots_cookies_choice') {
        // if choice changed in another tab, update visibility
        if (e.newValue) setVisible(false);
      }
    };
    window.addEventListener('kabots:lang-changed', onLang as EventListener);
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener('kabots:lang-changed', onLang as EventListener);
      window.removeEventListener('storage', onStorage as any);
    };
  }, []);

  const accept = () => {
    try { window.localStorage.setItem('kabots_cookies_choice', 'accepted'); } catch (e) {}
    setVisible(false);
  };
  const reject = () => {
    try { window.localStorage.setItem('kabots_cookies_choice', 'rejected'); } catch (e) {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white border rounded-lg shadow-lg px-4 py-3 z-50 max-w-3xl w-full mx-4">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-gray-700">{t('cookiesBanner.text')}</p>
        <div className="flex items-center space-x-2">
          <a href="/cookies" className="text-sm text-gray-600 hover:underline mr-3">{t('cookiesBanner.more')}</a>
          <button onClick={reject} className="px-3 py-1 rounded-md bg-gray-200 text-gray-800">{t('cookiesBanner.reject')}</button>
          <button onClick={accept} className="px-3 py-1 rounded-md bg-indigo-600 text-white">{t('cookiesBanner.accept')}</button>
        </div>
      </div>
    </div>
  );
}
