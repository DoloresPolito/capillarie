import Image from "next/image";
import Background from "../../../public/assets/backgrounds/backcover.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from "./styles.module.scss";
import Text from "@/about/Text";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
export default function Section2({ texttranslations }) {
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

          <h2>
          Leave our clinic with a <span>smile,</span> knowing your hair is in the<span> best hands.</span>
          </h2>
          <h5>
          Schedule your free consultation with Capillarie today and begin your path to exceptional hair re storation!
          </h5>

          <button>BOOK AN APPOIMENT</button>
        
        </div>
        {/* <div className={styles.backgroundContainer}>
          <motion.div style={{ y }} className={styles.motionDiv}>
            <Image
              src={Background}
              fill
              alt="image"
              style={{ objectFit: "cover", zIndex:"10" }}
            />
          </motion.div>
        </div> */}
      </div>
    </ParallaxProvider>
  );
}
