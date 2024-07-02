"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./styles.module.scss";
import Footer from "@/components/Footer2";
import ContactForm from "@/components/ContactForm";
import Rounded from "@/common/Rounded";
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

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h6>CONTACT US</h6>
            <h3>
              Schedule your appointment today and start your journey towards a
              healthier, happier you.
            </h3>
            <p>
              Our dedicated team is here to provide the care and support you
              need.
            </p>
            <div className={styles.buttoncontainer}>
              <Rounded >Book an appoiment</Rounded>
            </div>
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
