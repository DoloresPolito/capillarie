import React from "react";
import styles from "./styles.module.scss";
import Rounded from "@/common/Rounded";

export default function Footer({ contacttranslations }) {
  return (
    <div className={styles.footersection}>
      <div className={styles.footercontainer}>
        <div className={styles.infocontainer}>
          <div className={styles.left}>
            <div className={styles.top}>
              <h3>
                Schedule your free consultation with Capillarie today and begin
                your path to exceptional hair re storation!
              </h3>
              <div className={styles.buttoncontainer}>
                <Rounded border="1px solid white" >Book an appoiment</Rounded>
              </div>
            </div>
          </div>


          <div className={styles.right}>
            <div className={styles.col1}>
              <h6>Contacto</h6>
              <p>31-32 Wellington Quay  1st floor, D02KP11</p>
              <p>+54 11 57392254</p>
              <p>capillariedublin@gmail.com</p>
              <p>@capillariedublin</p>
            </div>
            <div className={styles.col2}>
              <h6>Nav</h6>
              <p>Hair implant</p>
              <p>Procedures</p>
              <p>About</p>
              <p>FAQs</p>
              <p>Contact</p>
            </div>
          </div>
        </div>

        <div className={styles.rightscontainer}>
          <div className={styles.bottom}>
            <p>
              ©2024 Capillarie Clinic Dublin | All rights reserved. Sitio por
              Vinte
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
