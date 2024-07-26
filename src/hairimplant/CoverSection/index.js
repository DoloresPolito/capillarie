"use client";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AnimatedDiv from "@/components/AnimatedDiv";
import { useTransform, useScroll } from "framer-motion";

const CoverSection = ({ haircovertranslations }) => {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
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
        <h6> {locale === "en" ? "HAIR IMPLANT" : "IMPLANTE CAPILAR"}</h6>
        <h4>{haircovertranslations.hairsmalltitle}</h4>

        {locale === "en" ? (
          <AnimatedDiv>
            <h2>
              Hair Implant
              <br />
              Follicular Unit Extraction <br /> <span>(F.U.E) </span>
            </h2>
          </AnimatedDiv>
        ) : (
          <AnimatedDiv>



            <h2>
              Implante Capilar
              <br />
              Extracción de unidades foliculares <br /> <span>(F.U.E) </span>
            </h2>
          </AnimatedDiv>
        )}
      </div>
    </div>
  );
};

export default CoverSection;
