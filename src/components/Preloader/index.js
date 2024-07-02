"use client";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity } from "./animation";

export default function Preloader({ item }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === item.length - 1) return;

    const timer = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 150);

    return () => clearTimeout(timer);
  }, [index, item.length]);

  return (
    <div className={styles.item}>
      <motion.p variants={opacity} initial="initial" animate="enter">
        {item[index]}
      </motion.p>
    </div>
  );
}
