import Image from "next/image";
import Background from "../../../public/assets/backgrounds/backcover.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from "./styles.module.scss";
import Text from "@/about/Text";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
export default function Section({texttranslations} ) {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <ParallaxProvider>
    <div
      ref={container}
      className={styles.section}
    >
      <div className={styles.textContainer}>
      <Text texttranslations={texttranslations} /> 
        {/* <p className={styles.smallText}>
          Beauty and quality need the right time to be conceived and realised
          even in a world that is in too much of a hurry.
        </p>
        <p className={styles.largeText}>Background Parallax</p> */}
      </div>
      <div className={styles.backgroundContainer}>
        <motion.div style={{ y }} className={styles.motionDiv}>
          <Image
            src={Background}
            fill
            alt="image"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </div>
    </ParallaxProvider>
  );
}
