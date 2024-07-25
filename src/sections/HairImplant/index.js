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
export default function HairImplantSection() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  //   const covertranslations = {
  //     title: translations.title,
  //     subtitle: translations.subtitle,
  //     sectiontitle: translations.sectiontitle,
  //     financingbutton: translations.financingbutton,
  //     bookbutton: translations.bookbutton,
  //   };

  //   const hairtranslations = {
  //     hairsectiontitle: translations.hairsectiontitle,
  //     hairsubtitle: translations.hairsubtitle,
  //     hairitem1: translations.hairitem1,
  //     hairitem2: translations.hairitem2,
  //     hairitem3: translations.hairitem3,
  //     hairitem4: translations.hairitem4,
  //     hairbutton: translations.hairbutton,
  //   };

  return (
    <>
      <div className={styles.section}>
        <CoverSection />
        <Intro />
        <Section1 />
        <Section2 />
        {/*  <DescriptionIntro />
        <InterSection/>
        <HairSurgerySection hairtranslations={hairtranslations} />


 
   */}

        <ResultsSection />
      </div>
      <Footer />
    </>
  );
}
