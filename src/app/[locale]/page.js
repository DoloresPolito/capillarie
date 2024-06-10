import styles from "./page.module.css";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import HomeSection from "../../sections/HomeSection";
import AnimatedHeader from "../../components/AnimatedHeader";

const i18nNamespaces = ["home", "common"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const translations = {
    title: t("title"),
    subtitle: t("subtitle"),
    sectiontitle:t("sectiontitle"),
    financingbutton: t("financingbutton"),
    bookbutton: t("bookbutton"),
    // Añade otras traducciones necesarias aquí
  };

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className={styles.main}>
        <AnimatedHeader />

        <HomeSection translations={translations} />
      </div>
    </TranslationsProvider>
  );
}
