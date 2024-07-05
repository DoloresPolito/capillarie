import React from 'react';
import Image from 'next/image';
import Background from "../../../public/images/aboutback.png";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './styles.module.scss';
import Cover from "@/about/Cover"

export default function Intro({covertranslations}) {
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
                <Cover covertranslations={covertranslations} />
                </div>
         
            </motion.div>
        </div>
    );
}