import React, { useRef } from 'react';
import Image from 'next/image';
import Background from '../../../public/assets/images/backgroundabout.png';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './styles.module.scss';

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className={styles.introContainer}>
      <motion.div style={{ y }} className={styles.motionDiv}>
        <Image src={Background} fill alt="image" style={{ objectFit: "cover" }} />
      </motion.div>
    </div>
  );
}