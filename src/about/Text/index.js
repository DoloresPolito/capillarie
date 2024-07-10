"use client";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import Paragraph from "@/components/Paragraph";
import { motion, useAnimation } from "framer-motion";
import AnimatedDiv from "@/components/AnimatedDiv";

import { useInView } from "react-intersection-observer";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Image from "next/image";
import about from "../../../public/images/about2.png";

const Text = ({ texttranslations }) => {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [controls, inView]);
  return (
    <>
      <div className={styles.section} ref={ref}>
        <div className={styles.container}>
          <div className={styles.right} style={{ zIndex: "10000" }}>
            <AnimatedDiv>
              <p className={styles.p2}>{texttranslations.text2}</p>
            </AnimatedDiv>
            <div className={styles.imagecontainer}>
              <Image src={about} alt="about" />
            </div>
          </div>

          <div className={styles.left}>
            <Parallax speed={-14}>
              <Paragraph
                paragraph={texttranslations.text1}
                className="subtitle"
              />
              <p className={styles.p1}>{texttranslations.text3}</p>
            </Parallax>
          </div>
        </div>
      </div>
    </>
  );
};

export default Text;
