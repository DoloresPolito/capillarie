"use client";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import ContactSection from "@/home/ContactSection";
import ReviewsSection from "@/home/ReviewsSection";
import FaqsSection from "@/home/FaqsSection";
import CoverSection from "@/home/CoverSection";

export default function Index({ translations }) {

  const covertranslations = {
    title: translations.title,
    subtitle: translations.subtitle,
    sectiontitle:translations.sectiontitle,
    financingbutton:translations.financingbutton,
    bookbutton:translations.bookbutton
  }

  return (
    //   <div className={styles.container}>
    //   <motion.div
    //       className={styles.box}
    //       animate={{ x: 100 }}
    //       transition={{ duration: 1 }}
    //     />
    //     <p className={styles.montserratbold}>{translations.text1}</p>
    //     <Contact/>
    //   </div>





    <>
      <div className={styles.section}>
        <CoverSection covertranslations={covertranslations}/>
        <FaqsSection/>
        <ReviewsSection/>
        <ContactSection />
      </div>
    </>
  );
}
