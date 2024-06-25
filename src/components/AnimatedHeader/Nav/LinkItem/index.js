import React from "react";
import styles from "./styles.module.scss";
import Magnetic from "@/common/Magnetic";
import StyledLink from "@/components/StyledLink";
import { motion } from "framer-motion";
import { slide } from "../../animation";
import { useTranslation } from "react-i18next";

export default function LinkItem({ link, isActive, setSelectedIndicator }) {
  const { t, i18n } = useTranslation("common");
  const locale = i18n.language;

  return (
    <>
      <motion.div
        custom={link.index}
        variants={slide}
        animate="enter"
        exit="exit"
        initial="initial"
        className={styles.link}
        onMouseEnter={() => setSelectedIndicator(link.link)}
        onMouseLeave={() => setSelectedIndicator(null)}
      >
        <Magnetic>
          <div className={styles.el}>
            <StyledLink link={link.link}>
              <p className={styles.text}>
                {locale === "es" ? link.spanish : link.english}
              </p>
            </StyledLink>
            <div
              className={`${styles.indicator} ${
                isActive ? styles.active : ""
              }`}
            ></div>
          </div>
        </Magnetic>
      </motion.div>
    </>
  );
}


       {/* <Link href={link.link}>
          {" "}
          {locale === "es" ? link.spanish : link.english}
        </Link> */}