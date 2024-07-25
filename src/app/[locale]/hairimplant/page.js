import styles from "./styles.module.scss";
import AnimatedHeader from "../../../components/AnimatedHeader";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import HairImplantSection from "@/sections/HairImplant"
const i18nNamespaces = ["procedures", "common"];

export default async function HairImplant({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className={styles.main}>
        <AnimatedHeader />
        <HairImplantSection />
      </div>
    </TranslationsProvider>
  );
}
