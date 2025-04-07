'use client';
import { APP_CONFIG } from '../config/config';
import { useTranslations } from '../hooks/useTranslations';
import { Lang } from '../types';

interface VersionInfoProps {
  lang: Lang;
}

export default function VersionInfo({ lang }: VersionInfoProps) {
  const t = useTranslations(lang);
  
  return (
    <div className="text-center text-gray-400 text-xs mt-6">
      <p>
        {t('footer.version', 'Versió')} {APP_CONFIG.version} • {APP_CONFIG.copyrightYear} © {APP_CONFIG.name}
      </p>
    </div>
  );
}
