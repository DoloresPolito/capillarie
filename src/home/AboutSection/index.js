"use client";
import { useEffect } from "react";
import styles from "./styles.module.scss";
// import Image from "next/image";
import Rounded from "../../common/Rounded";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import Paragraph from "@/components/Paragraph";
import AnimatedHeading from "@/components/HorizontalTitles";
import { motion, useAnimation } from "framer-motion";
import AnimatedDiv from "@/components/AnimatedDiv";

import { useInView } from "react-intersection-observer";

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
              {abouttranslations.aboutsectiontitle}
            </motion.h6>

            <Paragraph
              paragraph={abouttranslations.aboutsubtitle}
              className="subtitle"
            />

            {/* <h3>{abouttranslations.aboutsubtitle}</h3> */}
          </div>
          <div className={styles.right}>
            <AnimatedDiv>
              <p className={styles.p1}>{abouttranslations.abouttext1}</p>
              <p className={styles.p2}>{abouttranslations.abouttext2}</p>
              <p className={styles.p3}>{abouttranslations.abouttext3}</p>
            </AnimatedDiv>

            <div className={styles.buttoncontainer}>
              <Link
                href="/about"
                style={{ textDecoration: "none", color: "#493e36" }}
              >
                <Rounded> {abouttranslations.aboutbutton}</Rounded>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
