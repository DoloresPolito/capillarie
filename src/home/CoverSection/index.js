"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import Rounded from "../../common/Rounded";
import image from "../../../public/assets/images/cover.png";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const CoverSection = ({ covertranslations }) => {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <h6>{covertranslations.sectiontitle}</h6>
          <h4>{covertranslations.subtitle}</h4>

          {locale === "en" ? (
            <h2>
              Experience the <span>transformative power</span> of our
              specialized and rejuvenating <span>hair treatments. </span>
            </h2>
          ) : (
            <h2>
              Experimenta el <span>poder transformador</span> de nuestros{" "}
              <span>tratamientos capilares</span> especializados y
              rejuvenecedores.
            </h2>
          )}

          <div className={styles.buttonscontainer}>
            <div className={styles.buttoncontainer}>
              <Link
                href="https://wa.me/3446584076"
                target="_blank"
                style={{ textDecoration: "none", color: "#493e36" }}
              >
                <Rounded>{covertranslations.bookbutton}</Rounded>
              </Link>
            </div>

            <button className={styles.financingbutton}>
              {covertranslations.financingbutton}
            </button>
          </div>

          <div className={styles.imagecontainer}>
            <Image src={image} alt="coverimage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverSection;
