import React, { useState } from "react";
import styles from "./styles.module.scss";
import LinkItem from "./LinkItem";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../animation";
import LanguageChanger from "@/components/LanguageChanger";

export default function Mask({ links }) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.menu}
      >
        <div className={styles.body}>
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className={styles.nav}
          >
            <div className={styles.header}>
              <p>Navigation</p>
            </div>
            {links.map((link, index) => {
              return (
                <LinkItem
                  key={index}
                  link={{ ...link, index }}
                  isActive={selectedIndicator === link.link}
                  setSelectedIndicator={setSelectedIndicator}
                />
              );
            })}

            <div className={styles.headercontact}>
              <p>CONTACT</p>
            </div>
            <p className={styles.contacttext}>Telefono</p>
            <p className={styles.contacttext}>Mail</p>
            <p className={styles.contacttext}>Ubicación</p>
            <div className={styles.headerlang}>
              <p>LANGUAGE</p>
            </div>
            <LanguageChanger />
          </div>
        </div>
      </motion.div>
    </>
  );
}
