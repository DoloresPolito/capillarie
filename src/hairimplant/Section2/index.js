"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import AnimatedDiv from "@/components/AnimatedDiv";
import { useInView } from "react-intersection-observer";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import image1 from "../../../public/images/hairsection2.1.png";
import image2 from "../../../public/images/hairsection2.2.png";
import Image from "next/image";
import tic from "../../../public/assets/tic.svg";
export default function Section1() {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;

  const controls = useAnimation();

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

  const indications = [
    "Primary Indications: Androgenic alopecia, affecting both men and women.",
    "Secondary Indications: Various forms of scarring alopecia caused by factors such as surgery, burns, or radiation therapy.",
  ];

  const procedures = [
    "The surgery is performed under local anesthesia by a team of skilled professionals.",
    "It involves three main stages: extraction of follicles from the donor area, meticulous separation of follicles, and precise implantation into the recipient area.",
    "The gradual change in appearance over approximately 12 months post-surgery is accompanied by high patient satisfaction.",
  ];
  return (
    <div className={styles.generalcontainer}>
      <ParallaxProvider>
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles.left}>
              <Image src={image1} alt="hair implant" />
              <Image src={image2} alt="hair implant" />
            </div>

            <div className={styles.right}>
              <h6>INDICATIONS FOR HAIR IMPLANT</h6>
              <div className={styles.benefitscontainer}>
                {indications.map((benefit, idx) => (
                  <div key={idx} className={styles.benefit}>
                    <Image src={tic} alt="tic" /> <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <h6>SURGICAL PROCEDURE</h6>
              <div className={styles.benefitscontainer}>
                {procedures.map((benefit, idx) => (
                  <div key={idx} className={styles.benefit}>
                    <Image src={tic} alt="tic" /> <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ParallaxProvider>
    </div>
  );
}
