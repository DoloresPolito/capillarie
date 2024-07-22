import React from "react";
import up from "../../../public/assets/up.svg";
import down from "../../../public/assets/down.svg";
import styles from "./styles.module.scss"
import Image from "next/image";
import { motion } from "framer-motion";
export const AccordionItem = ({
  handleToggle,
  active,
  header,
  id,
  content,
}) => {
  const isActive = active === id;

  return (
    <div className={styles.card}   >
      <div 
    onClick={() => handleToggle(id)} 
      className={styles.header}>
        {header}

        <Image src={active === id ? up : down} alt="+" />
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isActive ? 'auto' : 0 }}
        transition={{ duration: 0.35 }}
        className={styles.motionContent}
      >
        <div className={styles.content}>{content}</div>
      </motion.div>
    </div>
  );
};



export default AccordionItem;
