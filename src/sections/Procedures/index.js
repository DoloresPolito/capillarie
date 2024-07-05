"use client";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import Intro from "../../procedures/Intro";
import Description from "../../procedures/Description";
import ImagesContainer from "../../procedures/ImagesContainer";
import Footer from "@/components/Footer2";

export default function Index() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className={styles.section}>
      <Intro />
      <Description />

      <ImagesContainer />

      <Footer />
    </div>
  );
}
