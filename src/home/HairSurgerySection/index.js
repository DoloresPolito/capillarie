"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import Rounded from "../../common/Rounded";
import { useTranslation } from "react-i18next";
import tic from "../../../public/assets/tic.svg"
import Link from "next/link";
import Paragraph from "@/components/Paragraph";

const HairSurgerySection = ({ hairtranslations }) => {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.left}>
      
            <h6>{hairtranslations.hairsectiontitle}</h6>
            <Paragraph paragraph={hairtranslations.hairsubtitle}  className="subhair"/>
            {/* <h3>{hairtranslations.hairsubtitle}</h3> */}
            <div className={styles.benefitscontainer}>
              <div className={styles.benefit}>
                <Image src={tic} alt="tic"/>
                <p>{hairtranslations.hairitem1}</p>
              </div>
              <div className={styles.benefit}>
              <Image src={tic} alt="tic"/>
              <p>{hairtranslations.hairitem2}</p>
              </div>
              <div className={styles.benefit}>
              <Image src={tic} alt="tic"/>
                <p>{hairtranslations.hairitem3}</p>
              </div>
              <div className={styles.benefit}>
              <Image src={tic} alt="tic"/>
              <p>{hairtranslations.hairitem4}</p>
              </div>
            </div>
            <div className={styles.buttoncontainer}>
            <Link href="/hairimplant" style={{textDecoration:"none", color:"#493e36"}}>
              <Rounded> {hairtranslations.hairbutton}</Rounded>
              </Link>
            </div>
          </div>
          <div className={styles.right}>
            {/* <p className={styles.p1}>{abouttranslations.abouttext1}</p>
            <p className={styles.p2}>{abouttranslations.abouttext2}</p>
            <p className={styles.p3}>{abouttranslations.abouttext3}</p>
            */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HairSurgerySection;
