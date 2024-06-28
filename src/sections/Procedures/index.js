"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "../../procedures/Intro";
import Description from "../../procedures/Description";
import Section from "@/procedures/Section";
import styles from "./styles.module.scss";
import Footer from "@/components/Footer2";
import CoverSection from "@/home/CoverSection";

export default function Index() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div className={styles.section}>
        <Intro />

        <Description />
        <Section />

        <Intro />

        <Description />
        <Section />

        <Footer />
      </div>
    </>
  );
}
