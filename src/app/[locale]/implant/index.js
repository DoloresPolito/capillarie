import styles from "./style.module.css";
import AnimatedHeader from "../../../components/AnimatedHeader";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

const i18nNamespaces = ["procedures", "common"];

export default async function HairImplant({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <AnimatedHeader />
      <div className={styles.main}>
        <p>
          {locale === "es" ? "TEXTO EN PROCEDIMIENTOS" : "TEXT IN PROCEDURES"}
        </p>

        <p>locale: {locale}</p>
      </div>
    </TranslationsProvider>
  );
}
