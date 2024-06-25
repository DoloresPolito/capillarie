import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './styles.module.scss';

const AnimatedHeading = ({ children, className }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  
  // Usa useTransform para animar el desplazamiento y la opacidad
  const x = useTransform(scrollYProgress, [0, 0.8], ['-60vw', '0vw']);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <motion.h6
      ref={containerRef}
      className={`${styles.heading} ${styles[className]}`}
      style={{ x, opacity }}
    >
      {children}
    </motion.h6>
  );
};

export default AnimatedHeading;