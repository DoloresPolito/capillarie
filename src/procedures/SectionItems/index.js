"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import Rounded from "../../common/Rounded";
import { useTranslation } from "react-i18next";
import tic from "../../../public/assets/tic.svg";
import Link from "next/link";
import Paragraph from "@/components/Paragraph";
import { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { slide, hairSlide } from "@/components/AnimatedHeader/animation";
import AnimatedDiv from "@/components/AnimatedDiv";

const HairSurgerySection = ({ hairtranslations }) => {
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
    <>
      <div className={styles.section} ref={ref}>
        <div className={styles.container}>
        <h3>Platelet-Rich Plasma (PRP) therapy utilizes patient's own blood to silumlate hair growth and improve hair density.</h3>
          <div className={styles.left}>


            {/* <Paragraph
       
            paragraph="Platelet-Rich Plasma (PRP) therapy utilizes patient's own blood to silumlate hair growth and improve hair density."
              className="subhair"
            /> */}
            
            <motion.div
              className={styles.benefitscontainer}
              variants={hairSlide}
              initial="initial"
              animate={inView ? "enter" : "exit"}
            >
              {[
                "Derived from the patient's own blood, reducing the risk of rejections.",
                "Only requires a dermatological evaluation before treatment.",
                "Effective in stimulating new hair growth and increasing the thickness of existing hair.",
                "Finance it easily, from €60/month. ",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.benefit}
                  variants={slide}
                  custom={index} // Custom prop to control the delay
                  initial="initial"
                  animate={inView ? "enter" : "exit"}
                >
                  <Image src={tic} alt="tic" />
                  <p>{item}</p>
                </motion.div>
              ))}
            </motion.div>
           
          </div>

          {/* Aquí empieza la parte derecha */}
          <div className={styles.right}>


            <AnimatedDiv>
              <div className={styles.imageContainer}>
               
              </div>
            </AnimatedDiv>

          </div>

        </div>
      </div>
    </>
  );
};

export default HairSurgerySection;
