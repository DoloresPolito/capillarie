"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import styles from "./styles.module.scss";
import Footer from "@/components/Footer2";
import TotalFaqs from "@/faqs/TotalFaqs";

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
            <button
              className={filter === "Clinic" ? styles.active : ""}
              onClick={() => handleFilter("Clinic")}
            >
              Dublin Clinic
            </button>
            <button
              className={filter === "Hair Implant" ? styles.active : ""}
              onClick={() => handleFilter("Hair Implant")}
            >
              Hair implant
            </button>
            <button
              className={filter === "Other Procedures" ? styles.active : ""}
              onClick={() => handleFilter("Other Procedures")}
            >
              Other procedures
            </button>
          </div>
          <TotalFaqs translations={translations} />
        </div>
        <Footer />
      </div>
    </>
  );
}