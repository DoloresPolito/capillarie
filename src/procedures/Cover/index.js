"use client";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import AnimatedDiv from "@/components/AnimatedDiv";

const data = [
  { title: "Platelet-Rich Plasma (PRP)", id: 1 },
  { title: "Hair Mesotherapy", id: 2 },
  { title: "Antiandrogen drugs", id: 3 },
  { title: "Minoxidil", id: 4 },
  { title: "Dutasteride Microinjections", id: 5 },
];

const CoverSection = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return (
    <div className={styles.section}>
      <h6>PROCEDURES WITHOUT SURGERY</h6>
      <AnimatedDiv>
        <h2>
          Custom solutions<span> for each patient.</span>
        </h2>
      </AnimatedDiv>
      <div className={styles.container}>
        <div className={styles.left}>
          {data.map(({ title, id }) => (
            <Link
              to={id}
              spy={true}
              smooth={true}
              offset={-50}
              duration={800}
              key={id}
            >
              <div className={styles.containeritem}>
                <h3 className="treatment-link">{title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoverSection;
