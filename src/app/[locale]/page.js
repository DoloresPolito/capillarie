import styles from "./page.module.scss";
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
    sectiontitle: t("sectiontitle"),
    financingbutton: t("financingbutton"),
    bookbutton: t("bookbutton"),

    faq1: t("faq1"),
    ans1: t("ans1"),
    faq2: t("faq2"),
    ans2: t("ans2"),
    faq3: t("faq3"),
    ans3: t("ans3"),
    faq4: t("faq4"),
    ans4: t("ans4"),
    faqstitle: t("faqstitle"),

    aboutsectiontitle: t("aboutsectiontitle"),
    aboutsubtitle: t("aboutsubtitle"),
    abouttext1: t("abouttext1"),
    abouttext2: t("abouttext2"),
    abouttext3: t("abouttext3"),
    aboutbutton: t("aboutbutton"),

    hairsectiontitle: t("hairsectiontitle"),
    hairsubtitle: t("hairsubtitle"),
    hairitem1: t("hairitem1"),
    hairitem2: t("hairitem2"),
    hairitem3: t("hairitem3"),
    hairitem4: t("hairitem4"),
    hairbutton: t("hairbutton"),

    treatmentssectiontitle: t("treatmentssectiontitle"),
    treatmentssubtitle: t("treatmentssubtitle"),
    treatmentsbutton: t("treatmentsbutton"),
    treathome1: t("treathome1"),
    treathome2: t("treathome2"),
    treathome3: t("treathome3"),

    contactsectiontitle: t("contactsectiontitle"),
    contacttext1: t("contacttext1"),
    contacttext2: t("contacttext2"),
    contactaddress: t("contactaddress"),
    contactbutton: t("contactbutton"),
    form1: t("form1"),
    form2: t("form2"),
    form3: t("form3"),
    form4: t("form4"),
    formbutton: t("formbutton"),

    reviewssectiontitle: t("reviewssectiontitle"),
    reviewstitle: t("reviewstitle"),
    reviewstext: t("reviewstext"),

    review1: t("review1"),
    review2: t("review2"),
    review3: t("review3"),
    review4: t("review4"),
    review5: t("review5"),
    review6: t("review6"),
    review7: t("review7"),
    review8: t("review8"),
    review9: t("review9"),
    review10: t("review10"),
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
