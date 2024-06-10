import styles from "./style.module.css";
import AnimatedHeader from "../../../components/AnimatedHeader"
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import FaqsSection from "@/home/FaqsSection";
const i18nNamespaces = ["procedures", "common"];


export default async function Procedures({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
            <AnimatedHeader/>
      <div className={styles.main}>

        {/* <h2>{t("title")}</h2>

        <p>
          {locale === "es" ? "TEXTO EN PROCEDIMIENTOS" : "TEXT IN PROCEDURES"}
        </p> */}
      
<FaqsSection/>
        <p>locale: {locale}</p>
      </div>
    </TranslationsProvider>
  );
}
