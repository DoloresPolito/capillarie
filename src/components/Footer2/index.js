import React from "react";
import styles from "./styles.module.scss";
import Rounded from "@/common/Rounded";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import arrow from "../../../public/assets/arrowwhite.svg";
import Link from "next/link";
import AnimatedDiv from "../AnimatedDiv";


import whwhite from "../../../public/assets/icons/wh-white.png"
import igwhite from "../../../public/assets/icons/ig-white.png"
import lkwhite from "../../../public/assets/icons/lk-white.png"
import mailwhite from "../../../public/assets/icons/mail-white.png"
import locwhite from "../../../public/assets/icons/loc-white.png"


export default function Footer() {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;
  return (
    <div className={styles.footersection}>
      <div className={styles.footercontainer}>
        <div className={styles.infocontainer}>
          <div className={styles.left}>

            <div className={styles.top}>
              <AnimatedDiv>

       
              <h3>
                {locale === "en"
                  ? "Schedule your free consultation with Capillarie today and begin your path to exceptional hair re storation!"
                  : "¡Programe su consulta gratuita con Capillarie hoy y comience su camino hacia una restauración capilar excepcional!"}
              </h3>
              </AnimatedDiv>
              <div className={styles.buttoncontainer}>
                <Rounded border="1px solid white" background="white"  hoverColor = "#493E36" footer={true}>  {locale === "en" ? "Book an appoiment " : "Reserva tu cita"}</Rounded>
              </div>
              <div className={styles.buttoncontainer}>

              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.col1}>
              <h6>     {locale === "en" ? "Contact" : " Contacto"}</h6>

           
              <Link
                href="mailto:capillarieclinic@gmail.com"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className={styles.contactlinkcontainer}>
                  <Image src={mailwhite} alt="mail" className={styles.logo}/>
                  <p>capillariedublin@gmail.com</p>
                  {/* <Image src={arrow} alt="arrow" /> */}
                </div>
              </Link>

              <Link
                href="https://api.whatsapp.com/send/?phone=543446584076"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className={styles.contactlinkcontainer}>
                <Image src={whwhite} alt="whatsapp" className={styles.logo}/>
                  <p>+54 11 57392254</p>
                  {/* <Image src={arrow} alt="arrow" /> */}
                </div>
              </Link>

              <Link
                href="https://www.instagram.com/capillarie/"

              

                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className={styles.contactlinkcontainer}>
                <Image src={igwhite} alt="instagram" className={styles.logo}/>
                  <p>@capillariedublin</p>
                  {/* <Image src={arrow} alt="arrow" /> */}
                </div>
              </Link>

              <Link href="https://www.linkedin.com/company/capillarie-clinic" style={{ textDecoration: "none" }}    target="_blank">
                <div className={styles.contactlinkcontainer}>
                <Image src={lkwhite} alt="linkedin" className={styles.logo}/>
                  <p>/capillarieclinic</p>
                  {/* <Image src={arrow} alt="arrow" /> */}
                </div>
              </Link>

              <Link
                href="https://www.google.com/maps/place/31%2F32+Wellington+Quay,+Temple+Bar,+Dublin+2,+D02+RX80,+Irlanda/@53.3457871,-6.266768,17z/data=!3m1!4b1!4m6!3m5!1s0x48670e832e53244f:0x182fb7c8a115ab7a!8m2!3d53.3457871!4d-6.2641931!16s%2Fg%2F11pkjs6j_2?entry=ttu"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className={styles.contactlinkcontainer}>
                <Image src={locwhite} alt="location" className={styles.logo}/>
                  <p>31-32 Wellington Quay 1st floor, D02KP11</p>
                  {/* <Image src={arrow} alt="arrow" /> */}
                </div>
              </Link>
            </div>
            <div className={styles.col2}>
              <h6>Nav</h6>
              <Link
                href="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>{locale === "en" ? "About" : "Nosotros"}</p>
              </Link>
              <p>{locale === "en" ? "Hair implant" : "Implante capilar"}</p>

              <Link
                href="/procedures"
                style={{ textDecoration: "none", color: "white" }}
              >
        
                <p>{locale === "en" ? "Procedures" : "Tratamientos"}</p>
              </Link>
          

      
              <Link
                href="/faqs"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>FAQs</p>
              </Link>
              <Link
                href="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>{locale === "en" ? "Contact" : "Contacto"}</p>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.rightscontainer}>
          <div className={styles.bottom}>
            <p>
  
              {locale === "en" ? "©2024 Capillarie Clinic Dublin | All rights reserved." : "©2024 Clínica Capillarie Dublin | Todos los derechos reservados."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
