"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import image1 from "../../../public/assets/images/person1.png";
import image2 from "../../../public/assets/images/person2.png";
import image3 from "../../../public/assets/images/person3.png";

export default function Team({teamtranslations}) {
  const team = [
    { name: "Pablo Maradey", image: image1 },
    { name: "Maria Garcia", image: image2 },
    { name: "Gustavo Fernandez", image: image3 },
  ];
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h6>THE TEAM</h6>
        <h3>{teamtranslations.subtitle2}</h3>
        <div className={styles.teamcontainer}>
          {team.map((person, index) => (
            <TeamMember key={index} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}

const TeamMember = ({ person }) => (
  <div className={styles.membercontainer}>
      


    <Image src={person.image} alt="member image" />
    <div className={styles.textcontainer}>
      <p>{person.name}</p>
      <p className={styles.profesion}>Cirujano Plástico</p>
    </div>
  
   </div>
);