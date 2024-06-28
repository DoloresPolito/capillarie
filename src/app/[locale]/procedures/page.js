import styles from "./style.module.css";
import AnimatedHeader from "../../../components/AnimatedHeader";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import ProceduresSection from "@/sections/Procedures"
const i18nNamespaces = ["procedures", "common"];

export default async function Procedures({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <AnimatedHeader />
 <ProceduresSection/>
    </TranslationsProvider>
  );
}
