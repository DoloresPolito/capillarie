"use client";
// import styles from "./style.module.css";
import { useState } from "react";
import questions1 from "../../jsons/questions1";
import AccordionItem from "@/components/AccordionItem";

import styles from "./styles.module.scss"

export default function FaqsSection({ translations }) {
  const [active, setActive] = useState("");

  const handleToggle = (id) => {
    setActive((prevActive) => (prevActive === id ? null : id));
  };

  return (
    <>
      <div className={styles.faqscontainer}>
        {questions1.map((question, index) => (
          <AccordionItem
            key={index}
            active={active}
            handleToggle={() => handleToggle(question.id)}
            id={question.id}
            header={question.title}
            content={question.content}
          />
        ))}
      </div>
    </>
  );
}
