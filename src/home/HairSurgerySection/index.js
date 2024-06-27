"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import Rounded from "../../common/Rounded";
import { useTranslation } from "react-i18next";
import tic from "../../../public/assets/tic.svg";
import Link from "next/link";
import Paragraph from "@/components/Paragraph";
import { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { slide, hairSlide } from "@/components/AnimatedHeader/animation";

const HairSurgerySection = ({ hairtranslations }) => {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <>
      <div className={styles.section} ref={ref}>
        <div className={styles.container}>
          <div className={styles.left}>
            <motion.h6
              initial={{ x: "-10vw", opacity: 0 }}
              animate={controls}
              className={`${styles.heading} `}
            >
              {hairtranslations.hairsectiontitle}
            </motion.h6>

            <Paragraph
              paragraph={hairtranslations.hairsubtitle}
              className="subhair"
            />
            {/* <h3>{hairtranslations.hairsubtitle}</h3> */}
            <motion.div
              className={styles.benefitscontainer}
              variants={hairSlide}
              initial="initial"
              animate={inView ? "enter" : "exit"}
            >
              {[
                hairtranslations.hairitem1,
                hairtranslations.hairitem2,
                hairtranslations.hairitem3,
                hairtranslations.hairitem4,
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.benefit}
                  variants={slide}
                  custom={index} // Custom prop to control the delay
                  initial="initial"
                  animate={inView ? "enter" : "exit"}
                >
                  <Image src={tic} alt="tic" />
                  <p>{item}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className={styles.buttoncontainer}>
              <Link
                href="/hairimplant"
                style={{ textDecoration: "none", color: "#493e36" }}
              >
                <Rounded> {hairtranslations.hairbutton}</Rounded>
              </Link>
            </div>
          </div>


           {/* Aquí empieza la parte derecha */}
           <div className={styles.right}>
           <motion.div
              className={styles.imageContainer}
              style={{ originY: 0 }} // Establecer el punto de transformación en la parte superior
              initial={{ scaleY: 0, opacity: 0 }}
              animate={inView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }} // Ajustar la duración y la curva para una animación más suave
            >
              <Image
                src="/assets/images/hair2.png" // Aquí reemplaza con la ruta correcta de tu imagen
                alt="Descripción de la imagen"
                objectFit="cover"
                quality={100}
                height={400}
                width={600}
                
              />
            </motion.div>
          </div>
          {/* Fin de la parte derecha */}
        </div>
      </div>
    </>
  );
};

export default HairSurgerySection;
