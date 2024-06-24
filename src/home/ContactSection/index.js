"use client";
import styles from "./styles.module.scss";
import Contact from "@/components/ContactForm";
import Rounded from "../../common/Rounded";
import Link from "next/link";

const ContactSection = ({contacttranslations}) => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.top}>
            <h6>{contacttranslations.contactsectiontitle}</h6>
          </div>
          <div className={styles.bottom}>
            <div className={styles.right}>
              <h3>Get in touch!</h3>
              {/* <p>you can reach us anytime</p> */}
              <p className={styles.p1}>
              {contacttranslations.contacttext1}
                <br />
                <br />
                {contacttranslations.contacttext2}
              </p>

              <p className={styles.p2}>
              {contacttranslations.contactaddress}
                </p>

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
              <Contact contacttranslations={contacttranslations}/>
            </div>
          </div>
        </div>{" "}
        <p className={styles.rightstext}> © All right reserved | Capillarie Clinic Dublin</p>
      </div>
    </>
  );
};

export default ContactSection;
