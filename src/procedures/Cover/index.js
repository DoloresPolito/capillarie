"use client";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import AnimatedDiv from "@/components/AnimatedDiv";
import { useTranslation } from "react-i18next";
const data = [
  { title: "Platelet-Rich Plasma (PRP)", id: 1 },
  { title: "Hair Mesotherapy", id: 2 },
  { title: "Antiandrogen drugs", id: 3 },
  { title: "Minoxidil", id: 4 },
  { title: "Dutasteride Microinjections", id: 5 },
];

const dataesp = [
  { title: "Plasma rico en plaquetas (PRP)", id: 1 },
  { title: "Mesoterapia Capilar", id: 2 },
  { title: "Medicamentos antiandrógenos", id: 3 },
  { title: "Minoxidil", id: 4 },
  { title: "Microinyecciones de dutasterida", id: 5 },
];

const CoverSection = ({ translations }) => {
  const [width, setWidth] = useState(null);

  const { t, i18n } = useTranslation("");
  const locale = i18n.language;

  const [currentData, setCurrentData] = useState(data);

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

  useEffect(() => {
    if (locale === "es") {
      setCurrentData(dataesp);
    }
  }, []);

  return (
    <div className={styles.section}>
      <h6>{translations.sectiontitle}</h6>
      <AnimatedDiv>
        {locale === "es" ? (
          <h2>
            Soluciones personalizadas<span> para cada paciente.</span>
          </h2>
        ) : (
          <h2>
            Custom solutions<span> for each patient.</span>
          </h2>
        )}
      </AnimatedDiv>
      <div className={styles.container}>
        <div className={styles.left}>
          {currentData.map(({ title, id }) => (
            <Link
              to={id}
              spy={true}
              smooth={true}
              offset={-50}
              duration={800}
              key={id}
            >
              <div className={styles.containeritem}>
                <h3 className="treatment-link">{title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoverSection;
