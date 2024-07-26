"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import styles from "./styles.module.scss";
import Footer from "@/components/Footer2";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import arrow from "../../../public/assets/arrow45.svg";
import arrowwhite from "../../../public/assets/arrow45white.svg";
import Link from "next/link";
import AnimatedDiv from "@/components/AnimatedDiv";

import whwhite from "../../../public/assets/icons/wh-white.png";
import whblack from "../../../public/assets/icons/wh-black.png";
import phonewhite from "../../../public/assets/icons/phone-white.png";
import phoneblack from "../../../public/assets/icons/phone-black.png";

import igwhite from "../../../public/assets/icons/ig-white.png";
import igblack from "../../../public/assets/icons/ig-black.png";

import lkwhite from "../../../public/assets/icons/lk2-white.png";
import lkblack from "../../../public/assets/icons/lk2-black.png";

import mailwhite from "../../../public/assets/icons/mail-white.png";
import mailblack from "../../../public/assets/icons/mail-black.png";

import locwhite from "../../../public/assets/icons/loc-white.png";
import locblack from "../../../public/assets/icons/loc-black.png";

export default function Index({ translations }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const contacttranslations = {
    contacttext1: translations.contacttext1,
    contacttext2: translations.contacttext2,
    message: translations.message,
    sectiontitle: translations.sectiontitle,
  };

  const contactlinks = [
    {
      name: "+54 3446 584076",
      url: "/",
      logowhite: phonewhite,
      logoblack: phoneblack,
    },
    {
      name: "@capillarieclinicdublin",
      url: "https://www.instagram.com/capillarie/",
      logowhite: igwhite,
      logoblack: igblack,
    },
    {
      name: "/capillarieclinic",
      url: "https://www.linkedin.com/company/capillarie-clinic" ,
      logowhite: lkwhite,
      logoblack: lkblack,
    },
    {
      name: "capillarieclinic@gmail.com",
      url: "mailto:capillarieclinic@gmail.com",
      logowhite: mailwhite,
      logoblack: mailblack,
    },
    {
      name: "31-32 Wellington Quay",
      url: "https://www.google.com/maps/place/31%2F32+Wellington+Quay,+Temple+Bar,+Dublin+2,+D02+RX80,+Irlanda/@53.3457871,-6.266768,17z/data=!3m1!4b1!4m6!3m5!1s0x48670e832e53244f:0x182fb7c8a115ab7a!8m2!3d53.3457871!4d-6.2641931!16s%2Fg%2F11pkjs6j_2?entry=ttu",
      logowhite: locwhite,
      logoblack: locblack,
    },
  ];

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
        <h6>{contacttranslations.sectiontitle}</h6>
            <AnimatedDiv>
              <h3>{contacttranslations.contacttext2}</h3>
            </AnimatedDiv>
            <div className={styles.content}>

         
          <div className={styles.left}>
       
            <div>
              {contactlinks.map((contactlink) => {
                return (
                  <ContactLink
                    key={contactlink.name}
                    contactlink={contactlink}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.right}>
            <ContactForm contacttranslations={contacttranslations} />
          </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

const ContactLink = ({ contactlink }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Link
      href={contactlink.url}
      style={{ textDecoration: "none", width: "300px" }}
      target="_blank"
    >
      <div
        className={styles.contactlinkcontainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={isHovered ? contactlink.logowhite : contactlink.logoblack}
          alt="arrow"
          className={styles.logo}
        />
        <p>{contactlink.name}</p>
        {/* <Image src={isHovered ? arrowwhite : arrow} alt="arrow" /> */}
      </div>
    </Link>
  );
};
