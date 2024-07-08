"use client";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
// import Link from "next/link";
import { Link } from "react-scroll";

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
      <div className={styles.container}>
        <div className={styles.right}>
          {data.map(({ title, id }) => (      <Link to={id} spy={true} smooth={true} offset={80} duration={800}>
            <div className={styles.containeritem} key={id}>
        
                <h3 className="treatment-link">{title}</h3>
       
            </div>
            </Link>
          ))}
        </div>

        <div className={styles.left}>
          {/* <h4>
            Take advantage of the clinics financing options available for the
            following treatments.
          </h4> */}
        </div>

       
      </div>
    </div>
  );
};

export default CoverSection;
