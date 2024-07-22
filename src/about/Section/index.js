import Image from "next/image";
import Background from "../../../public/assets/backgrounds/backcover.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from "./styles.module.scss";
import Text from "@/about/Text";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
export default function Section({ texttranslations }) {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <ParallaxProvider>
      <div ref={container} className={styles.section}>
        <div className={styles.textContainer}>
          <Text texttranslations={texttranslations} />
     
        </div>
        <div className={styles.backgroundContainer}>
          {/* <motion.div style={{ y }} className={styles.motionDiv}>
            <Image
              src={Background}
              fill
              alt="image"
              style={{ objectFit: "cover", zIndex:"10" }}
            />
          </motion.div> */}
        </div>
      </div>
    </ParallaxProvider>
  );
}
