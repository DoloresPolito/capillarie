"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import styles from "./styles.module.scss";
import Footer from "@/components/Footer2";
import AccordionItem from "@/components/AccordionItem";
import AnimatedDiv from "@/components/AnimatedDiv";

export default function Index({ translations }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [filter, setFilter] = useState("All");

  const handleFilter = (item) => {
    setFilter(item);
  };

  useEffect(() => {
    console.log("filter", filter);
  }, [filter]);

  const [active, setActive] = useState("");

  const handleToggle = (id) => {
    setActive((prevActive) => (prevActive === id ? null : id));
  };

  const faqsA = [
    {
      id: 1,
      faq: translations.faq1,
      ans: translations.ans1,
      category: "Hair Implant",
    },
    {
      id: 2,
      faq: translations.faq2,
      ans: translations.ans2,
      category: "Hair Implant",
    },
    {
      id: 3,
      faq: translations.faq3,
      ans: translations.ans3,
      category: "Hair Implant",
    },
    {
      id: 4,
      faq: translations.faq4,
      ans: translations.ans4,
      category: "Hair Implant",
    },
    {
      id: 5,
      faq: translations.faq5,
      ans: translations.ans5,
      category: "Other Procedures",
    },
    {
      id: 6,
      faq: translations.faq6,
      ans: translations.ans6,
      category: "General",
    },
    {
      id: 7,
      faq: translations.faq7,
      ans: translations.ans7,
      category: "Dublin Clinic",
    },
    {
      id: 8,
      faq: translations.faq8,
      ans: translations.ans8,
      category: "General",
    },
    {
      id: 9,
      faq: translations.faq9,
      ans: translations.ans9,
      category: "Hair Implant",
    },
    {
      id: 10,
      faq: translations.faq10,
      ans: translations.ans10,
      category: "Hair Implant",
    },
    {
      id: 11,
      faq: translations.faq11,
      ans: translations.ans11,
      category: "General",
    },
    {
      id: 12,
      faq: translations.faq12,
      ans: translations.ans12,
      category: "Other Procedures",
    },
    {
      id: 13,
      faq: translations.faq13,
      ans: translations.ans13,
      category: "General",
    },
    {
      id: 14,
      faq: translations.faq14,
      ans: translations.ans14,
      category: "General",
    },
    {
      id: 15,
      faq: translations.faq15,
      ans: translations.ans15,
      category: "General",
    },
    {
      id: 16,
      faq: translations.faq16,
      ans: translations.ans16,
      category: "General",
    },
  ];

  const categories = [
    "Dublin Clinic",
    "Hair Implant",
    "Other Procedures",
    "Financing",
  ];

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.titlecontainer}>
            <h2>FAQs</h2>
          </div>
          <div className={styles.filtercontainer}>
            <button
              className={filter === "All" ? styles.active : ""}
              onClick={() => handleFilter("All")}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={filter === category ? styles.active : ""}
                onClick={() => handleFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <AnimatedDiv>
            <div className={styles.faqscontainer}>
              {faqsA
                .filter(
                  (question) => filter === "All" || question.category === filter
                )
                .map((question) => (
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
          </AnimatedDiv>
        </div>
        <Footer />
      </div>
    </>
  );
}
