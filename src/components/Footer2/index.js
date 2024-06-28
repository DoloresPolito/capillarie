import React from "react";
import styles from "./styles.module.scss";
import Rounded from "@/common/Rounded";

export default function Footer({ contacttranslations }) {
  return (
    <div className={styles.footersection}>
      <div className={styles.footercontainer}>
        <div className={styles.left}>
          <div className={styles.top}>
            <h3>
              Somos profesionalismo médico, atención personalizada y tecnología
              de vanguardia
            </h3>
            <div className={styles.buttoncontainer}>
              <Rounded>Book an appoiment</Rounded>
            </div>
          </div>

          <div className={styles.bottom}>
            <p>
              ©2024 Capillarie Clinic Dublin
              <br />
    
              All rights reserved. Sitio por Vinte
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.col1}>
            <h6>Contacto</h6>
            <p>direccion</p>
            <p>telefono</p>
            <p>instagram</p>
          </div>
          <div className={styles.col2}>
            <h6>Nav</h6>
            <p>hair implant</p>
            <p>procedures</p>
            <p>about</p>
            <p>FAQs</p>
            <p>contact</p>
          </div>
        </div>
      </div>
    </div>
  );
}
