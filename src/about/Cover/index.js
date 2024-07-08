"use client";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AnimatedDiv from "@/components/AnimatedDiv";
import { useTransform, useViewportScroll } from "framer-motion";
import Preloader from "@/components/Preloader";

const CoverSection = ({ covertranslations }) => {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;

  const { scrollYProgress } = useViewportScroll();
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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  const item1 = ["10+", "20+", "30+", "50+", "70+", "90+", "100+"];
  const item2 = ["5+", "20+", "60+", "110+", "250+", "365+", "500+"];
  const item3 = ["500", "1000+", "1500+", "2000+", "3000+", "3500+", "4000+"];

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h6>{covertranslations.title}</h6>

        <AnimatedDiv>
          {locale === "en" ? (
            <AnimatedDiv>
              <h2>
                At Capillarie Clinic we specialize in{" "}
                <span>hair medicine and aesthetics.</span>
              </h2>
            </AnimatedDiv>
          ) : (
            <h2>
              En Clínica Capillarie somos especialistas en{" "}
              <span>medicina y estética capilar.</span>
            </h2>
          )}
        </AnimatedDiv>

        {width > 700 ? (
          <>
            {" "}
            <div className={styles.numberscontainer}>
              <div className={styles.item}>
                <h4>
                  {locale === "en" ? "Hair implants" : "Implantes capilares"}
                </h4>
                {isLoading ? (
                  <Preloader item={item1} />
                ) : (
                  <p>{item1[item1.length - 1]}</p>
                )}
              </div>

              <div className={styles.item}>
                <h4>
                  {" "}
                  {locale === "en" ? "Procedures/month" : "Procedimientos/mes"}
                </h4>
                {isLoading ? (
                  <Preloader item={item2} />
                ) : (
                  <p>{item2[item2.length - 1]}</p>
                )}
              </div>
              <div className={styles.item}>
                <h4>
                  {" "}
                  {locale === "en" ? "Happy pacients" : "Pacientes felices"}
                </h4>
                {isLoading ? (
                  <Preloader item={item3} />
                ) : (
                  <p>{item3[item3.length - 1]}</p>
                )}
              </div>
            </div>{" "}
          </>
        ) : (
          <></>
        )}

        <h3>{covertranslations.subtitle2}</h3>
      </div>
    </div>
  );
};

export default CoverSection;
