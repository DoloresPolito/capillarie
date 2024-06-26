import React, { useRef } from "react";
import styles from "./styles.module.scss";

import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";
import image1 from "../../../public/assets/images/t1.png";
import image2 from "../../../public/assets/images/t2.png";
import image3 from "../../../public/assets/images/t3.png";


const HorizontalScrollSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();

  // Usa useTransform para animar el desplazamiento y la opacidad
  const x = useTransform(scrollYProgress, [0, 0.6], ["25vw", "-5vw"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <motion.div
      ref={containerRef}
      className={styles.container}
      style={{ x, opacity }}
    >
     
      <motion.div className={styles.square}>
        <Image src={image1} alt="Mesotherapy" />
        <h4>Antiandrogen Drugs</h4>
      </motion.div>
      <motion.div className={styles.square}>
        <Image src={image2} alt="Plasma" />
        <h4>Platelet-Rich Plasma Therapy</h4>
      </motion.div>
      <motion.div className={styles.square}>
        <Image src={image3} alt="Antiandrogen" />
        <h4>Hair Mesotherapy</h4>
      </motion.div>
    </motion.div>
  );
};

export default HorizontalScrollSection;
