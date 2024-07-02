"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./styles.module.scss";
import Footer from "@/components/Footer2";
import Team from "@/about/Team";
import Cover from "@/about/Cover"
import Text from "@/about/Text"

export default function Index({translations}) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  console.log("TRANSLATIONS EN SEGUNDO ABOUT", translations)

  const covertranslations = {
    title: translations.title,
    subtitle: translations.subtitle,
    subtitle2: translations.subtitle2,

  }

const texttranslations = {
  text1:translations.text1,
  text2: translations.text2,
  text3: translations.text3,
}



  return (
    <>
      <div className={styles.section}>
        <Cover covertranslations={covertranslations}/>
        <Team/>
        <Text texttranslations={texttranslations}/>
        <Footer />
      </div>
    </>
  );
}
