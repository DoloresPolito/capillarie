import styles from "./styles.module.scss";
import AnimatedHeader from "../../../components/AnimatedHeader";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import HairImplantSection from "@/sections/HairImplant";
const i18nNamespaces = ["hairimplant", "common"];

export default async function HairImplant({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const translations = {
    hairsmalltitle: t("hairsmalltitle"),
    section1text1: t("section1text1"),
    section2item1: t("section2item1"),
    section2item2: t("section2item2"),
    section2item3: t("section2item3"),
    section2item4: t("section2item4"),
    section2item5: t("section2item5"),
  };

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className={styles.main}>
        <AnimatedHeader />
        <HairImplantSection translations={translations} />
      </div>
    </TranslationsProvider>
  );
}
