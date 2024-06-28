"use client";
import { useEffect } from "react";

import styles from "./styles.module.scss";

import image1 from "../../../public/assets/images/person1.png";
import image2 from "../../../public/assets/images/person2.png";
import image3 from "../../../public/assets/images/person3.png";

import Image from "next/image";

export default function Team() {
  const team = [
    { name: "Pablo Maradey", image: image1 },
    { name: "Gustavo Fernandez", image: image2 },
    { name: "Maria Garcia", image: image3 },
  ];
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <h6>THE TEAM</h6>

          <div className={styles.teamcontainer}>
            {team.map((person, index) => {
              return (
                <>
                  <TeamMember key={index} person={person} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

const TeamMember = ({ person }) => {
  return (
    <>
      <div className={styles.membercontainer}>
        <div className={styles.imagecontainer}>
          <Image src={person.image} alt="member image" />
        </div>
        <div className={styles.textcontainer}>
          <p>{person.name}</p>
        </div>
      </div>
    </>
  );
};
