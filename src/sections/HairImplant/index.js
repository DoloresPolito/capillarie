"use client";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import Lenis from "lenis";
import CoverSection from "@/hairimplant/CoverSection";
import ResultsSection from "@/home/ResultsSection";
import Footer from "@/components/Footer2";
import Intro from "@/home/IntroHome";
import Section1 from "@/hairimplant/Section1";
import Section2 from "@/hairimplant/Section2";

export default function HairImplantSection({ translations }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const haircovertranslations = {
    hairsmalltitle: translations.hairsmalltitle,
  };

  const hairsection1translations = {
    section1text1: translations.section1text1,
  };

  const hairsection2translations = {
    section2item1: translations.section2item1,
    section2item2: translations.section2item2,
    section2item3: translations.section2item3,
    section2item4: translations.section2item4,
    section2item5: translations.section2item5,
  };

  return (
    <>
      <div className={styles.section}>
        <CoverSection haircovertranslations={haircovertranslations} />
        <Intro section="hair" />
        <Section1 hairsection1translations={hairsection1translations} />
        <Section2 hairsection2translations={hairsection2translations} />
        <ResultsSection />
      </div>
      <Footer />
    </>
  );
}
