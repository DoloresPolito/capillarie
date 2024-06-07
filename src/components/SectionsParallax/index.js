"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
// import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import Contact from "../ContactForm";
import img1 from "../../../public/assets/images/cap1.png";
// import img2 from "../../../public/assets/images/cap2.png";
// import img3 from "../../../public/assets/images/cap3.png";
// import img4 from "../../../public/assets/images/cap4.png";
const images = ["cap5.png", "cap6.png", "cap3.png", "cap4.png", "cap1.png"];


export default function SectionParallax() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.8]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 1.1]);

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   const raf = (time) => {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   };

  //   const resize = () => {
  //     setDimension({ width: window.innerWidth, height: window.innerHeight });
  //   };

  //   window.addEventListener("resize", resize);
  //   requestAnimationFrame(raf);
  //   resize();

  //   return () => {
  //     window.removeEventListener("resize", resize);
  //   };
  // }, []);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <ColumnText
          text="Recupera tu confianza con 
nuestros tratamientos capilares"
          y={y2}
        />
        <Column images={[images[0], images[1]]} y={y} />

        {/* <Column images={[images[0], images[1], images[2]]} y={y3} /> */}
        <Column images={[images[1], images[0]]} y={y4} />
      </div>
      <div className={styles.spacer}>
        <div className={styles.imcontainer}>
          <Image src={img1} alt="image" className={styles.imagee} />
        </div>
        <Contact/>
      </div>
    </>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={`/assets/images/${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};

const ColumnText = ({ text, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      <div>
        <h2>{text}</h2>
      </div>
    </motion.div>
  );
};
