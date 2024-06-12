import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";
// import styled from "styled-components";

import img1 from "/public/assets/results/1.png";
import img2 from "/public/assets/results/2.png";
import img3 from "/public/assets/results/3.png";
import img4 from "/public/assets/results/4.png";
import img5 from "/public/assets/results/5.png";
import img6 from "/public/assets/results/6.png";

export default function Index() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <div className={styles.section}>
      <div className={styles.container}>
      <div className={styles.loopsection}>
            <div className={styles.blocks}>
              <div className={styles.contents}>
                <span className={styles.firstBlock}>
                  <>
                    <Image src={img1} alt="img2" loading="eager" />

                    <Image src={img2} alt="img3" loading="eager" />

                    <Image
                      src={img3}
                      alt="img4"
              
                      loading="eager"
                    />

                    <Image
                      src={img4}
                      alt="img4"
            
                      loading="eager"
                    />
                    <Image
                      src={img5}
                      alt="img1"
               
                      loading="eager"
                    />
                    <Image
                      src={img6}
                      alt="img1"
               
                      loading="eager"
                    />
                  </>
                </span>
                <span className="secondBlock">
                  <>
                    <Image src={img1} alt="img2" loading="eager" />

                    <Image src={img2} alt="img3" loading="eager" />

                    <Image
                      src={img3}
                      alt="img4"
               
                      loading="eager"
                    />

                    <Image
                      src={img4}
                      alt="img4"
                   
                      loading="eager"
                    />
                    <Image
                      src={img5}
                      alt="img1"
                  
                      loading="eager"
                    />
                    <Image
                      src={img6}
                      alt="img1"
                   
                      loading="eager"
                    />
                  </>
                </span>
              </div>
            </div>
            </div>
          </div>
      </div>


    </div>
  );
}

