"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./styles.module.scss";
import Intro from "../../procedures/Intro";
import ImagesContainer from "../../procedures/ImagesContainer";
import Footer from "@/components/Footer2";

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
    <div className={styles.section}>
      <Intro />
      <ImagesContainer />
      <Footer />
    </div>
  );
}
