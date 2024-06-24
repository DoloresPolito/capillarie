"use client";
import styles from "./styles.module.scss";
// import Image from "next/image";
import Rounded from "../../common/Rounded";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import Paragraph from "@/components/Paragraph";

const AboutSection = ({ abouttranslations }) => {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h6>{abouttranslations.aboutsectiontitle}</h6>

            <Paragraph
              paragraph={abouttranslations.aboutsubtitle}
              className="subtitle"
            />

            {/* <h3>{abouttranslations.aboutsubtitle}</h3> */}
          </div>
          <div className={styles.right}>
            <AnimatedText
              text={abouttranslations.abouttext1}
              className="p1"
        
            />
            {/* <p className={styles.p1}>{abouttranslations.abouttext1}</p> */}
            <p className={styles.p2}>{abouttranslations.abouttext2}</p>
            <p className={styles.p3}>{abouttranslations.abouttext3}</p>
            <div className={styles.buttoncontainer}>
              <Link
                href="/about"
                style={{ textDecoration: "none", color: "#493e36" }}
              >
                <Rounded> {abouttranslations.aboutbutton}</Rounded>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
