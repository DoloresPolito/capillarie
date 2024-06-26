"use client";
import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Rounded from "../../common/Rounded";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Paragraph from "@/components/Paragraph";
import HorizontalScrollSection from "@/components/HorizontalScroll";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const TreatmentsSection = ({ treatmentstranslations }) => {
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
    <div className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.h6
          initial={{ x: "-10vw", opacity: 0 }}
          animate={controls}
          className={`${styles.heading} `}
        >
          {treatmentstranslations.treatmentssectiontitle}
        </motion.h6>
        <Paragraph
          paragraph={treatmentstranslations.treatmentssubtitle}
          className="subtreatments"
        />
        <HorizontalScrollSection />
        <div className={styles.buttoncontainer}>
          <Link
            href="/procedures"
            style={{ textDecoration: "none", color: "#493e36" }}
          >
            <Rounded>{treatmentstranslations.treatmentsbutton}</Rounded>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsSection;
