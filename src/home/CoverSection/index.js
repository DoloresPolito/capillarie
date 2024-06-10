"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import Rounded from "../../common/Rounded";
import image from "../../../public/assets/images/cover.png";

const CoverSection = ({ covertranslations }) => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <h6>{covertranslations.sectiontitle}</h6>
          <h4>{covertranslations.subtitle}</h4>
          <h2>{covertranslations.title}</h2>

          <div className={styles.buttonscontainer}>
            <Rounded>{covertranslations.bookbutton}</Rounded>
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
