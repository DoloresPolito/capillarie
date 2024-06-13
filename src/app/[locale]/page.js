import styles from "./page.module.css";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import HomeSection from "../../sections/Home";
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

    faq1:t("faq1"),
    ans1:t("ans1"),
    faq2:t("faq2"),
    ans2:t("ans2"),
    faq3:t("faq3"),
    ans3:t("ans3"),
    faq4:t("faq4"),
    ans4:t("ans4"),
    faqstitle:t("faqstitle"),
    resultstitle:t("resultstitle"),


    aboutsectiontitle:t("aboutsectiontitle"),
    aboutsubtitle:t("aboutsubtitle"),
    abouttext1:t("abouttext1"),
    abouttext2:t("abouttext2"),
    abouttext3:t("abouttext3"),
    aboutbutton:t("aboutbutton"),


    hairsectiontitle:t("hairsectiontitle"),
    hairsubtitle:t("hairsubtitle"),
    hairitem1:t("hairitem1"),
    hairitem2:t("hairitem2"),
    hairitem3:t("hairitem3"),
    hairitem4:t("hairitem4"),
    hairbutton:t("hairbutton"),

    treatmentssectiontitle:t("treatmentssectiontitle"),
    treatmentssubtitle:t("treatmentssubtitle"),
    treatmentsbutton:t("treatmentsbutton"),
 
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
