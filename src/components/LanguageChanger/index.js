'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../../i18nConfig';
import styles from "./style.module.css";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className={styles.languageSwitcher}>
      <span
        className={`${styles.languageOption} ${currentLocale === 'en' ? styles.selected : ''}`}
        onClick={() => handleChange('en')}
      >
        EN
      </span>
      <span className={styles.separator}>|</span>
      <span
        className={`${styles.languageOption} ${currentLocale === 'es' ? styles.selected : ''}`}
        onClick={() => handleChange('es')}
      >
        ES
      </span>
    </div>
  );
}