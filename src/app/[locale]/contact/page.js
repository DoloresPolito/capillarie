import styles from "./styles.module.scss";
import AnimatedHeader from "../../../components/AnimatedHeader";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import Contact from "@/sections/Contact";
const i18nNamespaces = ["contact", "common"];

export default async function Procedures({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const translations = {
    contacttext1: t("contacttext1"),
    contacttext2: t("contacttext2"),
    message: t("message"),
    sectiontitle: t("sectiontitle"),
  };

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className={styles.main}>
        <AnimatedHeader />
        <Contact translations={translations} />
      </div>
    </TranslationsProvider>
  );
}
