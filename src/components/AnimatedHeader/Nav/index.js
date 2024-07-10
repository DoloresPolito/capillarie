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

  const contactlinks = [
    {
      spanish: "+54 11 57392254",
      english: "+54 11 57392254",
      link: "https://api.whatsapp.com/send/?phone=543446584076",
    },
    {
      spanish: "capillariedublin@gmail.com",
      english: "capillariedublin@gmail.com",
      link: "mailto:dolores.polito@gmail.com",
    },
    {
      spanish: "31-32 Wellington Quay, D02KP11",
      english: "31-32 Wellington Quay, D02KP11",
      link: "https://www.google.com/maps/place/31%2F32+Wellington+Quay,+Temple+Bar,+Dublin+2,+D02+RX80,+Irlanda/@53.3457871,-6.2667627,17z/data=!3m1!4b1!4m6!3m5!1s0x48670e832e53244f:0x182fb7c8a115ab7a!8m2!3d53.3457871!4d-6.2641931!16s%2Fg%2F11pkjs6j_2?entry=ttu",
    },
    {
      spanish: "@capillariedublin",
      english: "@capillariedublin",
      link: "https://www.instagram.com/dolorespolito/",
    },



  ];

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
                  target={false}
                />
              );
            })}

            {/* <div className={styles.headercontact}>
              <p>CONTACT</p>
            </div>

            {contactlinks.map((link, index) => (
              <LinkItem
                key={index}
                link={{ ...link, index }}
                isActive={selectedIndicator === link.link}
                setSelectedIndicator={setSelectedIndicator}
                target={true}              />
            ))} */}

            <div className={styles.langcontainer}>
            <LanguageChanger />
            </div>
    
          </div>
        </div>
      </motion.div>
    </>
  );
}
