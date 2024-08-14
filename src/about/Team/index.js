"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import image1 from "../../../public/assets/images/person1.png";
import image2 from "../../../public/assets/images/person2.png";
import image3 from "../../../public/assets/images/person3.png";

import image4 from "../../../public/assets/docs/fotodoc.jpeg";

import { useTranslation } from "react-i18next";

export default function Team({ teamtranslations }) {
  const team = [
    {
      name: "Pablo Maradey",
      image: image1,
      profession: "Aesthetic Dermatology",
      profesion: "Dermatología Estética",
    },
    {
      name: "Joviany",
      image: image4,
      profession: "Dermatologist",
      profesion: "Dermatologa",
    },
    {
      name: "Gustavo Schmitt",
      image: image3,
      profession: "Aesthetic Dermatology",
      profesion: "Dermatología Estética",
    },
  ];
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h6>{teamtranslations.teamtitle}</h6>
        <h3>{teamtranslations.subtitle2}</h3>
        {/* <div className={styles.teamcontainer}>
          {team.map((person, index) => (
            <TeamMember key={index} person={person} />
          ))}
        </div> */}
      </div>
    </div>
  );
}

const TeamMember = ({ person }) => {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;

  return (
    <div className={styles.membercontainer}>
      <Image src={person.image} alt="member image" />
      <div className={styles.textcontainer}>
        <p>{person.name}</p>
        <p className={styles.profesion}>
          {locale === "es" ? person.profesion : person.profession}
        </p>
      </div>
    </div>
  );
};
