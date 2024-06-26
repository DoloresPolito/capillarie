"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./styles.module.scss";
import Footer from "@/components/Footer2";
import Team from "@/about/Team";
import Cover from "@/about/Cover"

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
        <Cover/>
        <Team/>
        <Footer />
      </div>
    </>
  );
}
