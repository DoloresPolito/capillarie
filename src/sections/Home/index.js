"use client";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import Lenis from "lenis";
// import { motion } from "framer-motion";
import ReviewsSection from "@/home/ReviewsSection";
import FaqsSection from "@/home/FaqsSection";
import CoverSection from "@/home/CoverSection";
import AboutSection from "@/home/AboutSection";
import HairSurgerySection from "@/home/HairSurgerySection";
import TreatmentsSection from "@/home/TreatmentsSection";
import BlurryCursor from "@/components/Cursor";
import ResultsSection from "@/home/ResultsSection";
import HorizontalScroll from "@/components/HorizontalScroll"

import Footer from "@/components/Footer2";

export default function Index({ translations }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const covertranslations = {
    title: translations.title,
    subtitle: translations.subtitle,
    sectiontitle: translations.sectiontitle,
    financingbutton: translations.financingbutton,
    bookbutton: translations.bookbutton,
  };

  const faqstranslations = {
    faqstitle: translations.faqstitle,
    faq1: translations.faq1,
    ans1: translations.ans1,
    faq2: translations.faq2,
    ans2: translations.ans2,
    faq3: translations.faq3,
    ans3: translations.ans3,
    faq4: translations.faq4,
    ans4: translations.ans4,
    resultstitle: translations.resultstitle,
  };

  const abouttranslations = {
    aboutsectiontitle: translations.aboutsectiontitle,
    aboutsubtitle: translations.aboutsubtitle,
    abouttext1: translations.abouttext1,
    abouttext2: translations.abouttext2,
    abouttext3: translations.abouttext3,
    aboutbutton: translations.aboutbutton,
  };

  const hairtranslations = {
    hairsectiontitle: translations.hairsectiontitle,
    hairsubtitle: translations.hairsubtitle,
    hairitem1: translations.hairitem1,
    hairitem2: translations.hairitem2,
    hairitem3: translations.hairitem3,
    hairitem4: translations.hairitem4,
    hairbutton: translations.hairbutton,
  };

  const treatmentstranslations = {
    treatmentssectiontitle: translations.treatmentssectiontitle,
    treatmentssubtitle: translations.treatmentssubtitle,
    treatmentsbutton: translations.treatmentsbutton,



  };

  const contacttranslations = {

    contactsectiontitle:translations.contactsectiontitle,
    contacttext1:translations.contacttext1,
    contacttext2:translations.contacttext2,
    contactaddress:translations.contactaddress,
    contactbutton:translations.contactbutton,
    form1:translations.form1,
    form2:translations.form2,
    form3:translations.form3,
    form4:translations.form4,
    formbutton:translations.formbutton,

  }

  const reviewstranslations = {

    reviewssectiontitle:translations.reviewssectiontitle,
    reviewstitle:translations.reviewstitle,
    reviewstext:translations.reviewstext,
   
    review1:translations.review1,
    review2:translations.review2,
    review3:translations.review3,
    review4:translations.review4,
    review5:translations.review5,
    review6:translations.review6,
    review7:translations.review7,
    review8:translations.review8,
    review9:translations.review9,
    review10:translations.review10,
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
        <CoverSection covertranslations={covertranslations} />
        <AboutSection abouttranslations={abouttranslations} />
      
        <HairSurgerySection hairtranslations={hairtranslations} />
        <TreatmentsSection treatmentstranslations={treatmentstranslations} />
     
        <FaqsSection faqstranslations={faqstranslations} />
        <ResultsSection faqstranslations={faqstranslations}  />
        <ReviewsSection reviewstranslations={reviewstranslations}/>
   
 
        {/* <BlurryCursor/> */}
      </div>
      <Footer contacttranslations={contacttranslations}/>
    </>
  );
}
