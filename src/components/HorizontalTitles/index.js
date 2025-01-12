


import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './styles.module.scss';

const AnimatedHeading = ({ children, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' }
      });
    }
  }, [controls, inView]);

  return (
    <motion.h6
      ref={ref}
      initial={{ x: '-60vw', opacity: 0 }}
      animate={controls}
      className={`${styles.heading} ${className}`}
    >
      {children}
    </motion.h6>
  );
};

export default AnimatedHeading;