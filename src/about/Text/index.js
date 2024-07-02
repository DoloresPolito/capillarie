"use client";

import styles from "./styles.module.scss";

export default function Team({ texttranslations }) {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h4>{texttranslations.text1}</h4>

        <h3>{texttranslations.text2}</h3>

        <h2>{texttranslations.text3}</h2>
      </div>
    </div>
  );
}
