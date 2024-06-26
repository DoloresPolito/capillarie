"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import Rounded from "../../common/Rounded";
import { useTranslation } from "react-i18next";
import tic from "../../../public/assets/tic.svg"
import Link from "next/link";
import Paragraph from "@/components/Paragraph";
import { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { slide, menuSlide } from "@/components/AnimatedHeader/animation";

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
          <div className={styles.left}>

            <motion.h6
              initial={{ x: "-10vw", opacity: 0 }}
              animate={controls}
              className={`${styles.heading} `}
            >
              {hairtranslations.hairsectiontitle}
            </motion.h6>

            <Paragraph paragraph={hairtranslations.hairsubtitle} className="subhair" />
            {/* <h3>{hairtranslations.hairsubtitle}</h3> */}
            <motion.div className={styles.benefitscontainer}
              variants={menuSlide}
              initial="initial"
              animate={inView ? "enter" : "exit"}
            >
              {[hairtranslations.hairitem1, hairtranslations.hairitem2, hairtranslations.hairitem3, hairtranslations.hairitem4].map((item, index) => (
                <motion.div key={index} className={styles.benefit}
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
            <div className={styles.buttoncontainer}>
              <Link href="/hairimplant" style={{ textDecoration: "none", color: "#493e36" }}>
                <Rounded> {hairtranslations.hairbutton}</Rounded>
              </Link>
            </div>
          </div>
          <div className={styles.right}>
            {/* <p className={styles.p1}>{abouttranslations.abouttext1}</p>
            <p className={styles.p2}>{abouttranslations.abouttext2}</p>
            <p className={styles.p3}>{abouttranslations.abouttext3}</p>
            */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HairSurgerySection;