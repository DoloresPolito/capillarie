"use client";

import styles from "./styles.module.scss";

export default function Button({ text, color }) {
  return (
    <>
      <div className={styles.container} style={{border:` 1px solid ${color}`}}>
        <p style={{color:`${color}`, fontSize:"12px"}}>{text}</p>
        {/* <Image src={arrow}/> */}
      </div>
    </>
  );
}
