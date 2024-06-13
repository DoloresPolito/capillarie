
import styles from "./style.module.css";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import AnimatedHeader from "../../../components/AnimatedHeader";
import About from "@/sections/About";
const i18nNamespaces = ["about", "common"];

export default async function Index({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className={styles.main}>
        <AnimatedHeader />
       <About/>
      </div>
    </TranslationsProvider>
  );
}
