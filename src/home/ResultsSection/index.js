"use client";
import styles from "./styles.module.scss";
import SlidingImages from "../../components/SlidingImages";


export default function ResultsSection({faqstranslations}) {


  return (
    <>

      <div className={styles.resultssection}>
        <div className={styles.resultscontainer}>
 
        <h6>{faqstranslations.resultstitle}</h6>
        </div>
       
      </div>
      <SlidingImages />
    </>
  );
}
