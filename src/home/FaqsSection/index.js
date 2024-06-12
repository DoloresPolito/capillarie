"use client";
import { useState } from "react";
import AccordionItem from "@/components/AccordionItem";
import styles from "./styles.module.scss";
import Rounded from "../../common/Rounded";
import SlidingImages from "../../components/SlidingImages";

export default function FaqsSection({ faqstranslations }) {
  const [active, setActive] = useState("");

  const handleToggle = (id) => {
    setActive((prevActive) => (prevActive === id ? null : id));
  };

  return (
    <>
      <div className={styles.faqssection}>
        {/* <h6>{faqstranslations.faqstitle}</h6> */}
        <div className={styles.faqscontainer}>
          {/* {questions1.map((question, index) => (
            <AccordionItem
              key={index}
              active={active}
              handleToggle={() => handleToggle(question.id)}
              id={question.id}
              header={question.title}
              content={question.content}
            />
          ))} */}

          <AccordionItem
            active={active}
            handleToggle={() => handleToggle(1)}
            id={1}
            header={faqstranslations.faq1}
            content={faqstranslations.ans1}
          ></AccordionItem>
          <AccordionItem
            active={active}
            handleToggle={() => handleToggle(2)}
            id={2}
            header={faqstranslations.faq2}
            content={faqstranslations.ans2}
          ></AccordionItem>

          <AccordionItem
            active={active}
            handleToggle={() => handleToggle(3)}
            id={3}
            header={faqstranslations.faq3}
            content={faqstranslations.ans3}
          ></AccordionItem>
          <AccordionItem
            active={active}
            handleToggle={() => handleToggle(4)}
            id={4}
            header={faqstranslations.faq4}
            content={faqstranslations.ans4}
          ></AccordionItem>

          <div className={styles.buttoncontainer}>
            <Rounded>See all</Rounded>
          </div>
        </div>

        <h6>{faqstranslations.resultstitle}</h6>
      </div>
      <SlidingImages />
    </>
  );
}
