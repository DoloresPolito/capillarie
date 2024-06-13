"use client";
import { useState } from "react";
import styles from "./styles.module.scss";

import AccordionItem from "@/components/AccordionItem";

export default function TotalFaqs({ translations }) {
  const [active, setActive] = useState("");

  const handleToggle = (id) => {
    setActive((prevActive) => (prevActive === id ? null : id));
  };

  const faqsA = [
    { id: 1, faq: translations.faq1, ans: translations.ans1 },
    { id: 2, faq: translations.faq2, ans: translations.ans2 },
    { id: 3, faq: translations.faq3, ans: translations.ans3 },
    { id: 4, faq: translations.faq4, ans: translations.ans4 },
    { id: 5, faq: translations.faq5, ans: translations.ans5 },
    { id: 6, faq: translations.faq6, ans: translations.ans6 },
    { id: 7, faq: translations.faq7, ans: translations.ans7 },
    { id: 8, faq: translations.faq8, ans: translations.ans8 },
    { id: 9, faq: translations.faq9, ans: translations.ans9 },
    { id: 10, faq: translations.faq10, ans: translations.ans10 },
    { id: 11, faq: translations.faq11, ans: translations.ans11 },
    { id: 12, faq: translations.faq12, ans: translations.ans12 },
    { id: 13, faq: translations.faq13, ans: translations.ans13 },
    { id: 14, faq: translations.faq14, ans: translations.ans14 },
    { id: 15, faq: translations.faq15, ans: translations.ans15 },
    { id: 16, faq: translations.faq16, ans: translations.ans16 },
  ];

  return (
    <>
      <div className={styles.faqscontainer}>
        {faqsA.map((question) => (
          <AccordionItem
            key={question.id}
            active={active}
            handleToggle={() => handleToggle(question.id)}
            id={question.id}
            header={question.faq}
            content={question.ans}
          />
        ))}
      </div>
    </>
  );
}
