"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import Rounded from "../../common/Rounded";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Paragraph from "@/components/Paragraph";
import HorizontalScrollSection from "@/components/HorizontalScroll";


const TreatmentsSection = ({ treatmentstranslations }) => {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <h6>{treatmentstranslations.treatmentssectiontitle}</h6>
       
          <Paragraph paragraph={treatmentstranslations.treatmentssubtitle}  className="subtreatments"/>
          {/* <h3>{treatmentstranslations.treatmentssubtitle}</h3> */}
          <HorizontalScrollSection/>

          <div className={styles.buttoncontainer}>
          <Link href="/procedures" style={{textDecoration:"none", color:"#493e36"}}>
          <Rounded>{treatmentstranslations.treatmentsbutton}</Rounded>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TreatmentsSection;
