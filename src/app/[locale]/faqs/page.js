import styles from "./styles.module.scss";
import AnimatedHeader from "../../../components/AnimatedHeader";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

import Faqss from "@/sections/Faqs";

const i18nNamespaces = ["faqs", "common"];

export default async function Faqs({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const translations = {
    faq1: t("faq1"),
    ans1: t("ans1"),
    faq2: t("faq2"),
    ans2: t("ans2"),
    faq3: t("faq3"),
    ans3: t("ans3"),
    faq4: t("faq4"),
    ans4: t("ans4"),
    faq5: t("faq5"),
    ans5: t("ans5"),
    faq6: t("faq6"),
    ans6: t("ans6"),
    faq7: t("faq7"),
    ans7: t("ans7"),
    faq8: t("faq8"),
    ans8: t("ans8"),
    faq9: t("faq9"),
    ans9: t("ans9"),
    faq10: t("faq10"),
    ans10: t("ans10"),
    faq11: t("faq11"),
    ans11: t("ans11"),
    faq12: t("faq12"),
    ans12: t("ans12"),
    faq13: t("faq13"),
    ans13: t("ans13"),
    faq14: t("faq14"),
    ans14: t("ans14"),
    faq15: t("faq15"),
    ans15: t("ans15"),
    faq16: t("faq16"),
    ans16: t("ans16"),

    // faqstitle:t("faqstitle"),
    // resultstitle:t("resultstitle"),
  };

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >


  
   
  
      <div className={styles.main}>
      <AnimatedHeader />
      <Faqss translations={translations}/>

 
      </div>

    </TranslationsProvider>
  );
}
