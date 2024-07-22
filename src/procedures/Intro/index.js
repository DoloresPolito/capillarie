import React from 'react';
import Image from 'next/image';
import Background from "../../../public/assets/backgrounds/backcover.png";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './styles.module.scss';
import Cover from "@/procedures/Cover"

export default function Intro({translations}) {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    });
  
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
  
    return (
        <div className={styles.intro}>

            <motion.div style={{ y }} className={styles.motionDiv}>
                <Image src={Background} fill alt="image" style={{ objectFit: "cover" }} />
                <div className={styles.textcontainer}>
                <Cover  translations={translations}/>
                </div>
         
            </motion.div>
        </div>
    );
}