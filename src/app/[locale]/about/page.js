import styles from "./styles.module.scss";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import AnimatedHeader from "../../../components/AnimatedHeader";
import About from "@/sections/About";
const i18nNamespaces = ["about", "common"];

export default async function Index({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const translations = {
    title: t("title"),
    subtitle: t("subtitle"),
    subtitle2: t("subtitle2"),
    text1: t("text1"),
    text2: t("text2"),
    text3: t("text3"),
    teamtitle:t("teamtitle")
  };

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className={styles.main}>
        <AnimatedHeader />
        <About translations={translations} />
      </div>
    </TranslationsProvider>
  );
}
