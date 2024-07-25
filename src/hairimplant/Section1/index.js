"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import AnimatedDiv from "@/components/AnimatedDiv";
import { useInView } from "react-intersection-observer";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import image from "../../../public/images/hairsection1.png"
import Image from "next/image";
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

  const medium = 1000;
  return (
    <div className={styles.generalcontainer}>
      <ParallaxProvider>
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles.left}>
              <motion.h6
                initial={{ x: "-10vw", opacity: 0 }}
                animate={controls}
                className={`${styles.heading} `}
              >
               GENERAL
              </motion.h6>

              <h5>
              Hair loss can significantly impact self-esteem and confidence levels. For many individuals, especially those experiencing androgenic alopecia, surgical intervention becomes necessary for achieving desired results.
              </h5>

              <h4>
              As pioneers in hair transplantation for over a decade, our practice remains at the forefront of advancements in the field.  We specialize in the <span>Follicular Unit Extraction (FUE) technique,</span> renowned for its minimally invasive nature and ability to achieve natural-looking results.
              </h4>
{/* 
              <Paragraph paragraph="" className="subtitle" />
              <Paragraph paragraph="" className="subtitle" /> */}
            </div>

            <div className={styles.right}>
              <Parallax speed={width > medium ? -4 : 0}>
                <AnimatedDiv>
            <Image src={image} alt="hair implant"/>
                </AnimatedDiv>
              </Parallax>
            </div>
          </div>
        </div>
      </ParallaxProvider>
    </div>
  );
}
