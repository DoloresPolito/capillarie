"use client";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import SlidingImages from "../../components/SlidingImages";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import AnimatedDiv from "@/components/AnimatedDiv";
export default function ResultsSection() {


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
      <div className={styles.resultssection} ref={ref}>
        <div className={styles.resultscontainer}>


        <AnimatedDiv>
          <h6 className={`${styles.heading} `}>
         
          {locale === "es" ? "RESULTADOS" : "RESULTS"}
          </h6>
        </AnimatedDiv>
          <motion.h6
            initial={{ x: "-10vw", opacity: 0 }}
            animate={controls}
            className={`${styles.heading} `}
          >
       

          </motion.h6>
        </div>
      </div>
      <SlidingImages />
      {/* <SlidingImages /> */}

    </>
  );
}
