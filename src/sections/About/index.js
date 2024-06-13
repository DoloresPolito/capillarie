"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "../../about/Intro";
import Description from "../../about/Description";
import Section from "@/about/Section";
import styles from "./styles.module.scss"
import BlurryCursor from "@/components/Cursor";

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
        <div className={styles.container}></div>
      </div>
      <BlurryCursor/>
    </>
  );
}
