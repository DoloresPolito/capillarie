"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
// import Image from "next/image";
import Rounded from "../../common/Rounded";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Paragraph from "@/components/Paragraph";
import { motion, useAnimation } from "framer-motion";
import AnimatedDiv from "@/components/AnimatedDiv";

import { useInView } from "react-intersection-observer";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const AboutSection = ({ abouttranslations }) => {
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
    <>
        <ParallaxProvider>
      <div className={styles.section} ref={ref}>
        <div className={styles.container}>
          <div className={styles.left}>
            <motion.h6
              initial={{ x: "-10vw", opacity: 0 }}
              animate={controls}
              className={`${styles.heading} `}
            >
              {abouttranslations.aboutsectiontitle}
            </motion.h6>

            <Paragraph
              paragraph={abouttranslations.aboutsubtitle}
              className="subtitle"
            />

            {/* <h3>{abouttranslations.aboutsubtitle}</h3> */}
          </div>

       
          <div className={styles.right}>
          <Parallax speed={width > medium ? -4 : 0}>
            <AnimatedDiv>
              <p className={styles.p1}>{abouttranslations.abouttext1}</p>
              <p className={styles.p2}>{abouttranslations.abouttext2}</p>
              {/* <p className={styles.p3}>{abouttranslations.abouttext3}</p> */}
            </AnimatedDiv>
            </Parallax>
            <Parallax speed={width > medium ? -4 : 0}>
            <div className={styles.buttoncontainer}>
              <Link
                href="/about"
                style={{ textDecoration: "none", color: "#493e36" }}
              >
                <Rounded background="#44b9cc"> {abouttranslations.aboutbutton}</Rounded>
              </Link>
            </div>
            </Parallax>
          </div>

        </div>
      </div>
      </ParallaxProvider>
    </>
  );
};

export default AboutSection;
