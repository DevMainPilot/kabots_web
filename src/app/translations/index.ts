import { Lang, TranslationStructure } from '../types';
import catalan from './ca';
import english from './en';

// Exportar les traduccions com un objecte amb claus de llenguatge
export const translations: Record<Lang, TranslationStructure> = {
  ca: catalan,
  en: english
};

// També exportar cada idioma individualment per si es necessita accedir directament
export { catalan, english };