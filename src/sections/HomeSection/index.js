"use client";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import ContactSection from "@/home/ContactSection";
import ReviewsSection from "@/home/ReviewsSection";

export default function Index({ translations }) {
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
        <ReviewsSection/>
        <ContactSection />
      </div>
    </>
  );
}
