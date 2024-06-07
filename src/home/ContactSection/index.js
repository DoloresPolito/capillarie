"use client";

import styles from "./styles.module.scss";
import Contact from "@/components/ContactForm";

const ContactSection = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.top}>
            <h6>CONTACT</h6>

            <h3>Get in touch!</h3>
            <p>you can reach us anytime</p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <Contact />
            </div>
            <div className={styles.right}>
                <p className={styles.p1}>
                Schedule your appointment today and start your journey towards a healthier, happier you. 

                </p>

                <p className={styles.p2}>
                Our dedicated team is here to provide the care and support you need.
                </p>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
