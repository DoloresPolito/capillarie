import Image from 'next/image';
import Background from '../../../public/assets/images/backgroundabout.png';
// import Text from './components/Text';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './styles.module.scss';

export default function Section() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container} 
      className={styles.container}
    >
      {/* <Text /> */}
      <p>hola como andas</p>
      <p>hola como andas</p>
      <p>hola como andas</p>
      <p>hola como andas</p>
      <div className={styles.backgroundContainer}>
        <motion.div style={{ y }} className={styles.motionDiv}>
          <Image src={Background} fill alt="image" style={{ objectFit: "cover" }} />
        </motion.div>
      </div>
    </div>
  );
}