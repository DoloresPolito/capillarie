"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import styles from "./styles.module.scss";
import Footer from "@/components/Footer2";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import arrow from "../../../public/assets/arrow45.svg"
import arrowwhite from "../../../public/assets/arrow45white.svg"
import Link from "next/link";


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

    form1: translations.form1,
    form2: translations.form2,
    form3: translations.form3,
    form4: translations.form4,
    formbutton: translations.formbutton,
  };

  const contactlinks = [
    { name: "Whatsapp: +54 3446 584076", url: "/" },
    { name: "Instagram: @capillarieclinicdublin", url: "/" },
    { name: "Linkedin: /capillarieclinic", url: "/" },
    { name: "E-mail: capillarieclinic@gmail.com", url: "/" },
    { name: "Location: 31-32 Wellington Quay", url: "/" },
  ];

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h6>CONTACT US</h6>
            <h3>
            Our dedicated team is here to provide the care and support you need.
            </h3>
            {contactlinks.map((contactlink) => {
              return (
                <ContactLink key={contactlink.name} contactlink={contactlink} />
              );
            })}
          </div>
          <div className={styles.right}>
            <ContactForm contacttranslations={contacttranslations} />
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
    <Link href={contactlink.url} style={{ textDecoration: "none", width:"300px" }}>
      <div
        className={styles.contactlinkcontainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p>{contactlink.name}</p>
        <Image src={isHovered ? arrowwhite : arrow} alt="arrow" />
      </div>
    </Link>
  );
};
