"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Rounded from "../../common/Rounded";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Paragraph from "@/components/Paragraph";
import HorizontalScrollSection from "@/components/HorizontalScroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import image1 from "../../../public/assets/images/t1.png";
import image2 from "../../../public/assets/images/t2.png";
import image3 from "../../../public/assets/images/t3.png";

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

  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  const medium = 1000;

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

        {width > medium ? (
          <>
            <HorizontalScrollSection />
          </>
        ) : (
          <>
            <VerticalTreatments treatmentstranslations={treatmentstranslations}/>
          </>
        )}

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

const VerticalTreatments = ({ treatmentstranslations }) => {
  return (
    <>
      <div className={styles.verticalcontainer}>
        <div className={styles.square}>
          <Image src={image1} alt="Mesotherapy" />
          <h4>Antiandrogen Drugs</h4>
        </div>
        <div className={styles.square}>
          <Image src={image2} alt="Plasma" />
          <h4>Platelet-Rich Plasma Therapy</h4>
        </div>
        <div className={styles.square}>
          <Image src={image3} alt="Antiandrogen" />
          <h4>Hair Mesotherapy</h4>
        </div>
      </div>
    </>
  );
};
