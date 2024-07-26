"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import AnimatedDiv from "@/components/AnimatedDiv";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import image from "../../../public/images/hairsection1.png";
import Image from "next/image";

export default function Section1({ hairsection1translations }) {
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

  const medium = 1000;
  return (
    <div className={styles.generalcontainer}>
      <ParallaxProvider>
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles.left}>
              {/* <motion.h6
                initial={{ x: "-10vw", opacity: 0 }}
                animate={controls}
                className={`${styles.heading} `}
              >
                GENERAL
              </motion.h6> */}

              <h5>{hairsection1translations.section1text1}</h5>


              {locale === "en" ? (
                <h4>
                  As pioneers in hair transplantation for over a decade, our
                  practice remains at the forefront of advancements in the
                  field. We specialize in the{" "}
                  <span>Follicular Unit Extraction (FUE) technique,</span>{" "}
                  renowned for its minimally invasive nature and ability to
                  achieve natural-looking results.
                </h4>
              ) : (
                <h4>
                  Como pioneros en trasplante de cabello durante más de una
                  década, nuestro La práctica permanece a la vanguardia de los
                  avances en el campo. Nos especializamos en la{" "}
                  <span>
                    técnica de extracción de unidades foliculares (FUE),
                  </span>{" "}
                  reconocida por su naturaleza mínimamente invasiva y su
                  capacidad para lograr resultados de aspecto natural.
                </h4>
              )}
            </div>

            <div className={styles.right}>
              <Parallax speed={width > medium ? -4 : 0}>
                <AnimatedDiv>
                  <Image src={image} alt="hair implant" />
                </AnimatedDiv>
              </Parallax>
            </div>
          </div>
        </div>
      </ParallaxProvider>
    </div>
  );
}
