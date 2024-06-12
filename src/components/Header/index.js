"use client";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import Link from "next/link";
import LanguageChanger from "@/components/LanguageChanger";
import Image from "next/image";
import logo from "../../../public/assets/logo-name.png";
import StyledLink from "../StyledLink";


export default function Index() {
 
  const { t, i18n } = useTranslation("common");

  const locale = i18n.language;



  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logocontainer}>
          <Link href="/">
            <Image src={logo} alt="image" className={styles.logo} />
          </Link>
        </div>

        <div className={styles.linkscontainer}>
          <StyledLink link="/">
            <p className={styles.text}>Home</p>
          </StyledLink>
          <StyledLink link="/about">
            <p className={styles.text}>{locale === 'es' ? "Nosotros" : "About"}</p>
          </StyledLink>
          <StyledLink link="/procedures">
            <p className={styles.text}>{locale === 'es' ? "Tratamientos" : "Procedures"}</p>
          </StyledLink>
          <StyledLink link="/faqs">
            <p className={styles.text}>FAQs</p>
          </StyledLink>
          <StyledLink link="/testimonials">
            <p className={styles.text}>{t("common:nav_testimonials")}</p>
          </StyledLink>
          <StyledLink link="/contact">
            <p className={styles.text}>{t("common:nav_contact")}</p>
            </StyledLink>
          <LanguageChanger />
        </div>
      </div>
    </div>
  );
}
