"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import Rounded from "../../common/Rounded";
import image from "../../../public/assets/images/cover2.png";
import { useState, useEffect } from "react";
import imagemobile from "../../../public/assets/images/covermobile.png";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import AnimatedDiv from "@/components/AnimatedDiv";
import { motion, useTransform, useScroll } from "framer-motion";

const CoverSection = ({ covertranslations }) => {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
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
  }, [setWidth]);

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h6>{covertranslations.sectiontitle}</h6>
        <h4>{covertranslations.subtitle}</h4>

        {locale === "en" ? (
          <AnimatedDiv>
            <h2>
              Experience the <span>transformative power</span> of our
              specialized and rejuvenating <span>hair treatments. </span>
            </h2>
          </AnimatedDiv>
        ) : (
          <AnimatedDiv>
          <h2>
            Experimenta el <span>poder transformador</span> de nuestros{" "}
            <span>tratamientos capilares</span> especializados y
            rejuvenecedores.
          </h2>
          </AnimatedDiv>
        )}

        <div className={styles.buttonscontainer}>
          <div className={styles.buttoncontainer}>
            <Link
              href="https://wa.me/3446584076"
              target="_blank"
              style={{ textDecoration: "none", color: "#493e36" }}
            >
              <Rounded   background="#44b9cc">{covertranslations.bookbutton}</Rounded>
            </Link>
          </div>

          <button className={styles.financingbutton}>
            {covertranslations.financingbutton}
          </button>
        </div>

        {/* Utilizamos motion.div para aplicar el efecto de zoom a la imagen */}
        {/* <motion.div className={styles.imagecontainer} style={{ scale }}>
          <Image src={width > 600 ? image : imagemobile} alt="coverimage" />
        </motion.div> */}
      </div>
    </div>
  );
};

export default CoverSection;
