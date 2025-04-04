import { translations } from '../data/translations';
import { Lang } from '../types';

// Hook de traduccions amb tipat millorat
export function useTranslations(lang: Lang) {
    return (key: string, defaultValue: string = '') => {
      try {
        const keys = key.split('.');
        const result = keys.reduce((obj: any, k) => obj?.[k], translations[lang]);
        return result !== undefined ? result : defaultValue;
      } catch (e) {
        console.warn(`Translation key not found: ${key}`);
        return defaultValue;
      }
    };
  }