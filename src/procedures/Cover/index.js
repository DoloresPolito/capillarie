"use client";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AnimatedDiv from "@/components/AnimatedDiv";

const CoverSection = () => {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;

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

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h6>PROCEDURES WITHOUT SURGERY</h6>

          <h4>Take advantage of the clinic's financing options available for the following treatments.</h4>
        </div>




        <div className={styles.right}>
          <div className={styles.containeritem}>
            <h3>Platelet-Rich Plasma (PRP)</h3>
          </div>
          <div className={styles.containeritem}>
            <h3>Hair Mesotherapy</h3>
          </div>
          <div className={styles.containeritem}>
            <h3>Antiandrogen drugs</h3>
          </div>
          <div className={styles.containeritem}>
            <h3>Minoxidil </h3>
          </div>
          <div className={styles.containeritem}>
            <h3>Dutasteride Microinjections</h3>
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default CoverSection;
