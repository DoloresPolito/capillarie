"use client";
import styles from "./styles.module.scss";
import Rounded from "../../common/Rounded";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import AnimatedDiv from "@/components/AnimatedDiv";
import { useTransform, useScroll } from "framer-motion";

const CoverSection = ({ covertranslations }) => {
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
        <h6>HAIR IMPLANT</h6>
        <h4>
          Follicular micrograft hair transplantation, effective technique in
          modern hair restoration .{" "}
        </h4>

        {locale === "en" ? (
          <AnimatedDiv>
            <h2>
              Enhance your hairline and <span>confidence </span> with our
              precision <span>hair implant treatments.</span>
            </h2>
          </AnimatedDiv>
        ) : (
          <AnimatedDiv>
            <h2>
              Experimenta el <span>poder transformador</span> de nuestros{" "}
              <span>tratamientos capilares</span> especializados y
              rejuvenecedores.
            </h2>
          </AnimatedDiv>
        )}
      </div>
    </div>
  );
};

export default CoverSection;
