"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import image1 from "../../../public/assets/images/tv1.png";
import image2 from "../../../public/assets/images/tv2.png";
import image3 from "../../../public/assets/images/tv3.png";
import image4 from "../../../public/assets/images/tv4.png";
import image5 from "../../../public/assets/images/tv5.png";
import tic from "../../../public/assets/tic.svg";
import AnimatedDiv from "../../components/AnimatedDiv";
import { useTranslation } from "react-i18next";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import image1h from "../../../public/assets/images/th1.png";
import image2h from "../../../public/assets/images/th2.png";
import image3h from "../../../public/assets/images/th3.png";
import image4h from "../../../public/assets/images/th4.png";
import image5h from "../../../public/assets/images/th5.png";
const data = [
  {
    id: "1",
    title: "Platelet-Rich Plasma (PRP)",
    subtitle:
      " therapy utilizes patient's own blood to stimulate hair growth and improve hair density.",
    benefits: [
      "Derived from the patient's own blood, reducing the risk of rejections.",
      "Only requires a dermatological evaluation before treatment.",
      "Effective in stimulating new hair growth and increasing the thickness of existing hair.",
    ],
    additionalText1:
      "Typically involves 4-6 sessions per year, spaced 4-6 weeks apart.",
    additionalText2:
      "Results are often noticeable from the second session onwards.",

    image: image1,
    mobileimage: image1h,
  },
  {
    id: "2",
    title: "Hair mesotherapy",
    subtitle:
      " involves injecting a customized mixture of substances and medications directly into the scalp to enhance hair condition.",
    benefits: [
      "Provides direct improvement in hair condition.",
      "Can be tailored to individual needs.",
      "More effective for acute hair problems or early stages of chronic conditions.",
      "Short-term improvement is immediate.",
    ],
    additionalText1:
      "Treatment frequency varies based on the severity of the condition.",
    additionalText2:
      "Useful for individuals post-hair transplantation to maintain hair health.",

    image: image2,
    mobileimage: image2h,
  },
  {
    id: "3",
    title: "Antiandrogen drugs",
    subtitle:
      " are effective in treating male androgenic alopecia by targeting the hair follicle root.",
    benefits: [
      "Well-tolerated with minimal side effects.",
      "Allows patients to maintain a normal lifestyle during treatment.",
      "Dutasteride is more effective than finasteride, especially for diffuse or frontal hair loss.",
      "Effective in maintaining hair density and quality.",
    ],
    additionalText1:
      "Administration can be oral, via microinjections, or as topical treatments.",

    additionalText2:
      "Treatment plans are tailored to individual requirements. May be used in conjunction with other treatments for optimal results.",

    image: image3,
    mobileimage: image3h,
  },
  {
    id: "4",
    title: "Minoxidil",
    subtitle:
      " is a topical treatment used to stimulate hair thickening, available in liquid or foam forms.",
    benefits: [
      "Effectively promotes hair growth.",
      "Suitable for long-term use.",
      "Initial results may vary, with sustained effects requiring long-term use.",
      "Can be used alone or in combination with other therapies for enhanced efficacy.",
    ],
    additionalText1:
      "Application frequency and concentration vary based on individual needs.",
    image: image4,
    mobileimage: image4h,
  },
  {
    id: "5",
    title: "Antiandrogen drugs",
    subtitle:
      " are effective in treating male androgenic alopecia by targeting the hair follicle root.",
    benefits: [
      "Well-tolerated with minimal side effects.",
      "Allows patients to maintain a normal lifestyle during treatment.",
      "Dutasteride is more effective than finasteride, especially for diffuse or frontal hair loss.",
      "Effective in maintaining hair density and quality.",
    ],
    additionalText1:
      "Administration can be oral, via microinjections, or as topical treatments.",

    additionalText2:
      "Treatment plans are tailored to individual requirements. May be used in conjunction with other treatments for optimal results.",

    image: image5,
    mobileimage: image5h,
  },
];

const dataespañol = [
  {
    id: "1",
    title: "La terapia con Plasma Rico en Plaquetas (PRP)",
    subtitle:
      " utiliza la propia sangre del paciente para estimular el crecimiento del cabello y mejorar la densidad del cabello.",
    benefits: [
      "Derivado de la propia sangre del paciente, reduciendo el riesgo de rechazo.",
      "Solo requiere una evaluación dermatológica antes del tratamiento.",
      "Efectivo para estimular el nuevo crecimiento del cabello y aumentar el grosor del cabello existente.",
    ],
    additionalText1:
      "Por lo general, implica 4-6 sesiones por año, espaciadas de 4 a 6 semanas.",
    additionalText2:
      "Los resultados suelen ser notables desde la segunda sesión en adelante.",

    image: image1,
    mobileimage: image1h,
  },
  {
    id: "2",
    title: "La mesoterapia capilar",
    subtitle:
      " implica inyectar una mezcla personalizada de sustancias y medicamentos directamente en el cuero cabelludo para mejorar la condición del cabello.",
    benefits: [
      "Proporciona una mejora directa en la condición del cabello.",
      "Puede adaptarse a las necesidades individuales.",
      "Más efectivo para problemas agudos del cabello o etapas tempranas de condiciones crónicas.",
      "La mejora a corto plazo es inmediata.",
    ],
    additionalText1:
      "La frecuencia del tratamiento varía según la gravedad de la condición.",

    additionalText2:
      "Útil para individuos post-trasplante de cabello para mantener la salud del cabello.",
    image: image2,
    mobileimage: image2h,
  },
  {
    id: "3",
    title: "Los medicamentos antiandrógenos",
    subtitle:
      " son efectivos para tratar la alopecia androgenética masculina al dirigirse a la raíz del folículo piloso.",
    benefits: [
      "Bien tolerados con efectos secundarios mínimos.",
      "Permite a los pacientes mantener un estilo de vida normal durante el tratamiento.",
      "Dutasteride es más efectivo que finasteride, especialmente para la pérdida de cabello difusa o frontal.",
      "Efectivo para mantener la densidad y calidad del cabello.",
    ],
    additionalText1:
      "La administración puede ser oral, mediante microinyecciones o tratamientos tópicos.",
    additionalText2:
      "Los planes de tratamiento se adaptan a los requisitos individuales. Puede usarse en combinación con otros tratamientos para obtener resultados óptimos.",
    image: image3,
    mobileimage: image3h,
  },
  {
    id: "4",
    title: "Minoxidil",
    subtitle:
      " es un tratamiento tópico utilizado para estimular el engrosamiento del cabello, disponible en forma líquida o en espuma.",
    benefits: [
      "Promueve eficazmente el crecimiento del cabello.",
      "Adecuado para uso a largo plazo.",
      "Los resultados iniciales pueden variar, y los efectos sostenidos requieren un uso a largo plazo.",
      "Puede usarse solo o en combinación con otras terapias para una mayor eficacia.",
    ],
    additionalText1:
      "La frecuencia de aplicación y la concentración varían según las necesidades individuales.",
    image: image4,
    mobileimage: image4h,
  },
  {
    id: "5",
    title: "Los medicamentos antiandrógenos",
    subtitle:
      " son efectivos para tratar la alopecia androgenética masculina al dirigirse a la raíz del folículo piloso.",
    benefits: [
      "Bien tolerados con efectos secundarios mínimos.",
      "Permite a los pacientes mantener un estilo de vida normal durante el tratamiento.",
      "Dutasteride es más efectivo que finasteride, especialmente para la pérdida de cabello difusa o frontal.",
      "Efectivo para mantener la densidad y calidad del cabello.",
    ],
    additionalText1:
      "La administración puede ser oral, mediante microinyecciones o tratamientos tópicos.",
    additionalText2:
      "Los planes de tratamiento se adaptan a los requisitos individuales. Puede usarse en combinación con otros tratamientos para obtener resultados óptimos.",
    image: image5,
    mobileimage: image5h,
  },
];

export default function ImagesContainer() {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;

  const currentData = locale === "es" ? dataespañol : data;

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

  const medium = 1000;

  return (
    <ParallaxProvider>
      <div className={styles.maincontainer}>
        {currentData.map(
          (
            {
              title,
              subtitle,
              benefits,
              additionalText1,
              additionalText2,
              image,
              id,
              mobileimage,
            },
            index
          ) => {
            const isEven = index % 2 === 0;
            return (
              <div
                className={`${styles.treatcontainer} ${
                  isEven ? styles.even : styles.odd
                }`}
                key={index}
                id={id}
              >
                <h3>
                  {" "}
                  <span>{title}</span>
                  {subtitle}
                </h3>

                <div className={styles.content}>
                  <div className={styles.treattext}>
                    <h6>BENEFITS</h6>
                    <AnimatedDiv>
                      <div className={styles.benefitscontainer}>
                        {benefits.map((benefit, idx) => (
                          <div key={idx} className={styles.benefit}>
                            <Image src={tic} alt="tic" /> <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </AnimatedDiv>
                    <h6>TREATMENTS PLAN</h6>
                    <div className={styles.extratext}>
                      <h5>{additionalText1}</h5>
                      {additionalText2 ? <h5>{additionalText2}</h5> : <h5></h5>}
                    </div>
                  </div>
                  <div className={styles.imagecontainer}>
                    <AnimatedDiv>
                      {width > medium ? (
                        <Image
                          src={image}
                          className={styles.image}
                          alt={title}
                        />
                      ) : (
                        <Image
                          src={mobileimage}
                          className={styles.image}
                          alt={title}
                        />
                      )}
                    </AnimatedDiv>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </ParallaxProvider>
  );
}
