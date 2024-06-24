"use client";
import styles from "./styles.module.scss";
import Contact from "@/components/ContactForm";
import Rounded from "../../common/Rounded";
import Link from "next/link";

const ContactSection = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.top}>
            <h6>CONTACT</h6>
          </div>
          <div className={styles.bottom}>
            <div className={styles.right}>
              <h3>Get in touch!</h3>
              {/* <p>you can reach us anytime</p> */}
              <p className={styles.p1}>
                Schedule your appointment today and start your journey towards a
                healthier, happier you.
                <br />
                <br />
                Our dedicated team is here to provide the care and support you
                need.
              </p>

              {/* <p className={styles.p2}>
          
                </p> */}

              <div className={styles.buttonscontainer}>
                <div className={styles.buttoncontainer}>
                  <Link
                    href="/faqs"
                    style={{ textDecoration: "none", color: "#493e36" }}
                  >
                    <Rounded>See all</Rounded>
                  </Link>
                </div>

                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
              </div>
            </div>
            <div className={styles.left}>
              <Contact />
            </div>
          </div>
        </div>{" "}
        <p className={styles.rightstext}>All right reserved | Capillarie Clinic Dublin</p>
      </div>
    </>
  );
};

export default ContactSection;
