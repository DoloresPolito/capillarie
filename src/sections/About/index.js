"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./styles.module.scss";
import Footer from "@/components/Footer2";
import Intro from "@/about/Intro";
import DescriptionParallax from "@/about/DescriptionParallax";
import Section from "@/about/Section";
import GeneralSection from "@/components/GeneralSetion";

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
  };

  const texttranslations = {
    text1: translations.text1,
    text2: translations.text2,
    text3: translations.text3,
  };

  const teamtranslations = {
    subtitle2: translations.subtitle2,
    teamtitle:translations.teamtitle
  };

  return (
    <>
      <div className={styles.section}>
        <Intro covertranslations={covertranslations} />

        <DescriptionParallax teamtranslations={teamtranslations} />
        <Section texttranslations={texttranslations} />
        <GeneralSection />


      </div>
      <Footer />
    </>
  );
}
