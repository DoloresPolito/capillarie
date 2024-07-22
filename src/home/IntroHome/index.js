import React from 'react';
import Image from 'next/image';
import Background from "../../../public/images/backhome.png";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './styles.module.scss';

export default function Intro() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    });
  
    const y = useTransform(scrollYProgress, [0, 1], ["-50vh", "100vh"]);
  
    return (
        <div className={styles.intro}>

            <motion.div style={{ y }} className={styles.motionDiv}>
                <Image src={Background} fill alt="image" style={{ objectFit: "cover" }} />     
            </motion.div>
        </div>
    );
}