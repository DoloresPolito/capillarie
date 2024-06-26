"use client";
import { useState, useEffect } from "react";
import AccordionItem from "@/components/AccordionItem";
import styles from "./styles.module.scss";
import Rounded from "../../common/Rounded";
import SlidingImages from "../../components/SlidingImages";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

export default function FaqsSection({ faqstranslations }) {
  const [active, setActive] = useState("");

  const handleToggle = (id) => {
    setActive((prevActive) => (prevActive === id ? null : id));
  };

  const faqsA = [
    { id: 1, faq: faqstranslations.faq1, ans: faqstranslations.ans1 },
    { id: 2, faq: faqstranslations.faq2, ans: faqstranslations.ans2 },
    { id: 3, faq: faqstranslations.faq3, ans: faqstranslations.ans3 },
    { id: 4, faq: faqstranslations.faq4, ans: faqstranslations.ans4 },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <>
      {/* <SlidingImages /> */}
      <div className={styles.faqssection} ref={ref}>

      <motion.h6
          initial={{ x: "-10vw", opacity: 0 }}
          animate={controls}
          className={`${styles.heading} `}
        >
       {faqstranslations.faqstitle}
        </motion.h6>
     
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

          <div className={styles.buttoncontainer}>
            <Link
              href="/faqs"
              style={{ textDecoration: "none", color: "#493e36" }}
            >
              <Rounded>See all</Rounded>
            </Link>
          </div>
        </div>

        {/* <h6>{faqstranslations.resultstitle}</h6> */}
      </div>
    </>
  );
}
