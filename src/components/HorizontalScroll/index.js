import React, { useRef } from "react";
import styles from "./styles.module.scss";

import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";
import image1 from "../../../public/assets/images/th5.png";
import image2 from "../../../public/assets/images/th6.png";
import image3 from "../../../public/assets/images/th3.png";

import Link from "next/link";
const HorizontalScrollSection = ({treatmentstranslations}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();

  // Usa useTransform para animar el desplazamiento y la opacidad
  const x = useTransform(scrollYProgress, [0, 0.6], ["25vw", "-5vw"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <motion.div
      ref={containerRef}
      className={styles.container}
      style={{ x, opacity }}
    >
      <motion.div className={styles.square}>
        <Link href="/procedures">
          <Image src={image1} alt="Mesotherapy" />
          <h4>{treatmentstranslations.treathome1}</h4>
        </Link>
      </motion.div>

      <motion.div className={styles.square}>
        <Link href="/procedures">
          <Image src={image2} alt="Minoxidil" />
          <h4>{treatmentstranslations.treathome2}</h4>
        </Link>
      </motion.div>
      <motion.div className={styles.square}>
        <Link href="/procedures">
          <Image src={image3} alt="Antiandrogen" />
          <h4>{treatmentstranslations.treathome3}</h4>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HorizontalScrollSection;
