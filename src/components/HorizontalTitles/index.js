// import { motion, useTransform, useViewportScroll } from 'framer-motion';
// import React, { useRef } from 'react';
// import styles from './styles.module.scss';

// const AnimatedHeading = ({ children, className }) => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useViewportScroll();
  
//   // Usa useTransform para animar el desplazamiento y la opacidad
//   const x = useTransform(scrollYProgress, [0, 0.8], ['-60vw', '0vw']);
//   const opacity = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

//   return (
//     <motion.h6
//       ref={containerRef}
//       className={`${styles.heading} ${styles[className]}`}
//       style={{ x, opacity }}
//     >
//       {children}
//     </motion.h6>
//   );
// };

// export default AnimatedHeading;


import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './styles.module.scss';

const AnimatedHeading = ({ children, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    console.log('In view:', inView);
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