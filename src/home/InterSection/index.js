"use client";
import React from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import AnimatedDiv from "@/components/AnimatedDiv";

const TreatmentsSection = () => {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;


  return (
    <div className={styles.section} >
      <div className={styles.container}>
        <AnimatedDiv>
          {locale === 'es' ? <h2>Ofrecemos soluciones exclusivas que
            <span>
              {" "}
              no encontrarás en ningún otro lugar. Ofreciendo tratamientos capilares avanzados
              y{" "}
            </span>
            opciones de financiación flexibles{" "}
            <span>para que acceder a la atención que necesita sea más fácil que nunca.</span></h2> :   <h2>
            <span> We provide</span> exclusive solutions
            <span>
              {" "}
              you won&apos;t find anywhere else! Offering advanced hair treatments
              and{" "}
            </span>
            flexible financing options{" "}
            <span>to make accessing the care you need easier than ever.</span>
          </h2>}
        
        </AnimatedDiv>
      </div>
    </div>
  );
};

export default TreatmentsSection;
