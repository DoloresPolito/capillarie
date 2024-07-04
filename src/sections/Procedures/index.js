
"use client";
import { useEffect } from "react";
import styles from "./styles.module.css";
import Intro from "../../procedures/Intro";
import Description from "../../procedures/Description";
import ImagesContainer from "../../procedures/ImagesContainer";
import Cover from "../../procedures/Cover";
import Footer from "@/components/Footer2";

export default function Index() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main}>
      {/* <Intro /> */}
      <Cover/>
      <Description />

      <ImagesContainer />

      <Footer/>

    </main>
  );
}
