"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import Rounded from "../../common/Rounded";
import image from "../../../public/assets/images/cover2.png";
import { useState, useEffect } from "react";

import imagemobile from "../../../public/assets/images/covermobile.png";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import AnimatedDiv from "@/components/AnimatedDiv";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const CoverSection = ({ covertranslations }) => {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;

  const { scrollYProgress } = useViewportScroll();
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
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <h6>ABOUT US</h6>

          {locale === "en" ? (
            <AnimatedDiv>
              <h2>
                At <span>Capillarie Clinic</span> we specialize in{" "}
                <span>hair medicine and aesthetics.</span>
              </h2>
            </AnimatedDiv>
          ) : (
            <h2>
              Experimenta el <span>poder transformador</span> de nuestros{" "}
              <span>tratamientos capilares</span> especializados y
              rejuvenecedores.
            </h2>
          )}

          <div className={styles.numberscontainer}>
            <div className={styles.item}>
              <h4>Hair implants</h4>
              <p>100 +</p>
            </div>

            <div className={styles.item}>
              <h4>Procedures/month</h4>
              <p>45.5</p>
            </div>
            <div className={styles.item}>
              <h4>Happy pacients</h4>
              <p>4000 +</p>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverSection;
