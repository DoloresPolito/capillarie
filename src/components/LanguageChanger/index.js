import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import i18nConfig from '../../../i18nConfig';
import styles from "./styles.module.scss";

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

  const languageVariants = {
    selected: {
      x: [-20, 0], // Mover de -20 a 0 en el eje X
      backgroundColor: "#44B9CC",
      color: "#fff",
      borderRadius: "30px",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      }
    },
    notSelected: {
      x: [20, 0], // Mover de 20 a 0 en el eje X
      backgroundColor: "transparent",
      color: "#000",
      borderRadius: "30px",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      }
    }
  };

  return (
    <div className={styles.languageSwitcher}>
      <motion.span
        className={styles.languageOption}
        onClick={() => handleChange('en')}
        variants={languageVariants}
        animate={currentLocale === 'en' ? 'selected' : 'notSelected'}
        initial={false}
      >
        <span style={{ position: 'relative' }}>EN</span>
      </motion.span>
      <motion.span
        className={styles.languageOption}
        onClick={() => handleChange('es')}
        variants={languageVariants}
        animate={currentLocale === 'es' ? 'selected' : 'notSelected'}
        initial={false}
      >
        <span style={{ position: 'relative' }}>ES</span>
      </motion.span>
    </div>
  );
}