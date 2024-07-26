"use client";
import React from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import AnimatedDiv from "@/components/AnimatedDiv";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import image1 from "../../../public/images/hairsection2.1.png";
import image2 from "../../../public/images/hairsection2.2.png";
import Image from "next/image";
import tic from "../../../public/assets/tic.svg";
export default function Section1({hairsection2translations}) {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;

  const indications = [
    hairsection2translations.section2item1,
    hairsection2translations.section2item2,
  ];

  const procedures = [
    hairsection2translations.section2item3,
    hairsection2translations.section2item4,
    hairsection2translations.section2item5,
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
              <h6>{locale === "es" ? "INDICACIONES DEL IMPLANTE CAPILAR" : "INDICATIONS FOR HAIR IMPLANT"}</h6>
              <AnimatedDiv>

       
              <div className={styles.benefitscontainer}>
                {indications.map((benefit, idx) => (
                  <div key={idx} className={styles.benefit}>
                    <Image src={tic} alt="tic" /> <span>{benefit}</span>
                  </div>
                ))}
              </div>
              </AnimatedDiv>
              <h6>{locale === "es" ? "PROCEDIMIENTO QUIRÚRGICO" : "SURGICAL PROCEDURE"}</h6>
              <AnimatedDiv>
              <div className={styles.benefitscontainer}>
                {procedures.map((benefit, idx) => (
                  <div key={idx} className={styles.benefit}>
                    <Image src={tic} alt="tic" /> <span>{benefit}</span>
                  </div>
                ))}
              </div>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </ParallaxProvider>
    </div>
  );
}
