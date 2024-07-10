"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import image1 from "../../../public/assets/images/1..png";
import image2 from "../../../public/assets/images/2..png";
import image3 from "../../../public/assets/images/3..png";
import image4 from "../../../public/assets/images/4..png";
import tic from "../../../public/assets/tic.svg";
import AnimatedDiv from "../../components/AnimatedDiv";
import { useTranslation } from "react-i18next";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import image5 from "../../../public/assets/images/t1.png";
import image6 from "../../../public/assets/images/t2.png";
import image7 from "../../../public/assets/images/t3.png";

const data = [
  {
    id: "1",
    title:
      "Platelet-Rich Plasma (PRP) therapy utilizes patient's own blood to stimulate hair growth and improve hair density.",
    benefits: [
      "Derived from the patient's own blood, reducing the risk of rejections.",
      "Only requires a dermatological evaluation before treatment.",
      "Effective in stimulating new hair growth and increasing the thickness of existing hair.",
    ],
    additionalText:
      "Typically involves 4-6 sessions per year, spaced 4-6 weeks apart. Results are often noticeable from the second session onwards.",
    image: image1,
    mobileimage: image5,
  },
  {
    id: "2",
    title:
      "Hair mesotherapy involves injecting a customized mixture of substances and medications directly into the scalp to enhance hair condition.",
    benefits: [
      "Provides direct improvement in hair condition.",
      "Can be tailored to individual needs.",
      "More effective for acute hair problems or early stages of chronic conditions.",
      "Short-term improvement is immediate.",
    ],
    additionalText:
      "Treatment frequency varies based on the severity of the condition. Useful for individuals post-hair transplantation to maintain hair health.",
    image: image2,
    mobileimage: image6,
  },
  {
    id: "3",
    title:
      "Antiandrogen drugs are effective in treating male androgenic alopecia by targeting the hair follicle root.",
    benefits: [
      "Well-tolerated with minimal side effects.",
      "Allows patients to maintain a normal lifestyle during treatment.",
      "Dutasteride is more effective than finasteride, especially for diffuse or frontal hair loss.",
      "Effective in maintaining hair density and quality.",
    ],
    additionalText:
      "Administration can be oral, via microinjections, or as topical treatments. Treatment plans are tailored to individual requirements. May be used in conjunction with other treatments for optimal results.",
    image: image3,
    mobileimage: image7,
  },
  {
    id: "4",
    title:
      "Minoxidil is a topical treatment used to stimulate hair thickening, available in liquid or foam forms.",
    benefits: [
      "Effectively promotes hair growth.",
      "Suitable for long-term use.",
      "Initial results may vary, with sustained effects requiring long-term use.",
      "Can be used alone or in combination with other therapies for enhanced efficacy.",
    ],
    additionalText:
      "Application frequency and concentration vary based on individual needs.",
    image: image4,
    mobileimage: image6,
  },
  {
    id: "5",
    title:
      "Antiandrogen drugs are effective in treating male androgenic alopecia by targeting the hair follicle root.",
    benefits: [
      "Well-tolerated with minimal side effects.",
      "Allows patients to maintain a normal lifestyle during treatment.",
      "Dutasteride is more effective than finasteride, especially for diffuse or frontal hair loss.",
      "Effective in maintaining hair density and quality.",
    ],
    additionalText:
      "Administration can be oral, via microinjections, or as topical treatments. Treatment plans are tailored to individual requirements. May be used in conjunction with other treatments for optimal results.",
    image: image2,
    mobileimage: image5,
  },
];

const dataespañol = [
  {
    id: "1",
    title:
      "La terapia con Plasma Rico en Plaquetas (PRP) utiliza la propia sangre del paciente para estimular el crecimiento del cabello y mejorar la densidad del cabello.",
    benefits: [
      "Derivado de la propia sangre del paciente, reduciendo el riesgo de rechazo.",
      "Solo requiere una evaluación dermatológica antes del tratamiento.",
      "Efectivo para estimular el nuevo crecimiento del cabello y aumentar el grosor del cabello existente.",
    ],
    additionalText:
      "Por lo general, implica 4-6 sesiones por año, espaciadas de 4 a 6 semanas. Los resultados suelen ser notables desde la segunda sesión en adelante.",
    image: image1,
    mobileimage: image5,
  },
  {
    id: "2",
    title:
      "La mesoterapia capilar implica inyectar una mezcla personalizada de sustancias y medicamentos directamente en el cuero cabelludo para mejorar la condición del cabello.",
    benefits: [
      "Proporciona una mejora directa en la condición del cabello.",
      "Puede adaptarse a las necesidades individuales.",
      "Más efectivo para problemas agudos del cabello o etapas tempranas de condiciones crónicas.",
      "La mejora a corto plazo es inmediata.",
    ],
    additionalText:
      "La frecuencia del tratamiento varía según la gravedad de la condición. Útil para individuos post-trasplante de cabello para mantener la salud del cabello.",
    image: image2,
    mobileimage: image6,
  },
  {
    id: "3",
    title:
      "Los medicamentos antiandrógenos son efectivos para tratar la alopecia androgenética masculina al dirigirse a la raíz del folículo piloso.",
    benefits: [
      "Bien tolerados con efectos secundarios mínimos.",
      "Permite a los pacientes mantener un estilo de vida normal durante el tratamiento.",
      "Dutasteride es más efectivo que finasteride, especialmente para la pérdida de cabello difusa o frontal.",
      "Efectivo para mantener la densidad y calidad del cabello.",
    ],
    additionalText:
      "La administración puede ser oral, mediante microinyecciones o tratamientos tópicos. Los planes de tratamiento se adaptan a los requisitos individuales. Puede usarse en combinación con otros tratamientos para obtener resultados óptimos.",
    image: image3,
    mobileimage: image7,
  },
  {
    id: "4",
    title:
      "Minoxidil es un tratamiento tópico utilizado para estimular el engrosamiento del cabello, disponible en forma líquida o en espuma.",
    benefits: [
      "Promueve eficazmente el crecimiento del cabello.",
      "Adecuado para uso a largo plazo.",
      "Los resultados iniciales pueden variar, y los efectos sostenidos requieren un uso a largo plazo.",
      "Puede usarse solo o en combinación con otras terapias para una mayor eficacia.",
    ],
    additionalText:
      "La frecuencia de aplicación y la concentración varían según las necesidades individuales.",
    image: image4,
    mobileimage: image6,
  },
  {
    id: "5",
    title:
      "Los medicamentos antiandrógenos son efectivos para tratar la alopecia androgenética masculina al dirigirse a la raíz del folículo piloso.",
    benefits: [
      "Bien tolerados con efectos secundarios mínimos.",
      "Permite a los pacientes mantener un estilo de vida normal durante el tratamiento.",
      "Dutasteride es más efectivo que finasteride, especialmente para la pérdida de cabello difusa o frontal.",
      "Efectivo para mantener la densidad y calidad del cabello.",
    ],
    additionalText:
      "La administración puede ser oral, mediante microinyecciones o tratamientos tópicos. Los planes de tratamiento se adaptan a los requisitos individuales. Puede usarse en combinación con otros tratamientos para obtener resultados óptimos.",
    image: image2,
    mobileimage: image5,
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
            { title, benefits, additionalText, image, id, mobileimage },
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
                <div className={styles.treattext}>
           
                  <h3>{title}</h3>
          
                  <h6>BENEFITS</h6>
                  <AnimatedDiv>
                    <div className={styles.benefitscontainer}>
                      {benefits.map((benefit, idx) => (
                        <div key={idx} className={styles.benefit}>
                          <Image src={tic} alt="tic" />
                          <p>{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </AnimatedDiv>

                  <h6>TREATMENTS PLAN</h6>
                  <p className={styles.extratext}>{additionalText}</p>
                </div>

                {/* {width > medium ? (<></>) : (<></>)} */}
                <Parallax speed={width > medium ? -14 : 0}>
                  <AnimatedDiv>
                    <div className={styles.imagecontent}>
                      {/* <div className={styles.imagecontainer}> */}
                      <Image
                        src={width > medium ? image : mobileimage}
                        alt="procedure picture"
                        style={{ width: "auto" }}
                      />
                      {/* </div> */}
                    </div>
                  </AnimatedDiv>
                </Parallax>
              </div>
            );
          }
        )}
        {/* <div className={styles.box2}></div> */}
      </div>
    </ParallaxProvider>
  );
}
