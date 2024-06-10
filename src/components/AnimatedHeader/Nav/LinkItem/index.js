import styles from "./styles.module.scss";

import Link from "next/link";
import { motion } from "framer-motion";
import { slide } from "../../animation";

export default function LinkItem({ data }) {
  return (
    <>
      <motion.div
      custom={data.index}
        variants={slide}
        animate="enter"
        exit="exit"
        initial="initial"
        className={styles.link}
      >
        <Link href={data.href}>{data.title}</Link>
      </motion.div>
    </>
  );
}