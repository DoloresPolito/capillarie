import React, { useRef } from "react";
import styles from "./styles.module.scss";

import {
  motion,
  useTransform,
  useViewportScroll,
} from "framer-motion";

const HorizontalScrollSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();

  // Usa useTransform para animar el desplazamiento y la opacidad
  const x = useTransform(scrollYProgress, [0, 0.6], ["25vw", "-5vw"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <motion.div
      ref={containerRef}
      className={styles.container}
      style={{ x, opacity }}
    >
      <motion.div
        className={styles.square}
    
      />
      <motion.div
        className={styles.square}
    
      />
      <motion.div
        className={styles.square}

      />

    </motion.div>
  );
};

export default HorizontalScrollSection;
