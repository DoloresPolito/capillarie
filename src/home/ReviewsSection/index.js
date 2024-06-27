import { useEffect } from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import arrowDown from "../../../public/assets/down.svg";
import arrowUp from "../../../public/assets/up.svg";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedDiv from "@/components/AnimatedDiv";

const ReviewsSection = ({ reviewstranslations }) => {
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

  const cards = [
    { name: "Nicolas Romero", text: reviewstranslations.review1 },
    { name: "Giorgio Rossini", text: reviewstranslations.review2 },
    { name: "Toni Perez Comas", text: reviewstranslations.review3 },
    { name: "Alan Karakus", text: reviewstranslations.review4 },
    { name: "Wellington Freitas", text: reviewstranslations.review5 },
    { name: "Angel TS", text: reviewstranslations.review6 },
    { name: "Ricardo Fraga", text: reviewstranslations.review7 },
    { name: "Rodrigo Fernandez Leon", text: reviewstranslations.review8 },
    { name: "Francisco Garcia Sanchez", text: reviewstranslations.review9 },
    {
      name: "Joaquin Ignacio Aguirre Cerino",
      text: reviewstranslations.review10,
    },
  ];

  return (
    <div className={styles.section} ref={ref}>
      <div className={styles.titles}>
        <motion.h6
          initial={{ x: "-10vw", opacity: 0 }}
          animate={controls}
          className={styles.heading}
        >
          {reviewstranslations.reviewssectiontitle}
        </motion.h6>
        <h3 className={styles.reviewstitle}>
          {reviewstranslations.reviewstitle}
        </h3>
        <p className={styles.reviewstext}>{reviewstranslations.reviewstext}</p>
      </div>
      <AnimatedDiv>


      <div className={styles.container}>
        <div className={styles.carouselcontainer}>
          <div className={styles.arrowscontainer}>
            <div className={styles.customprev}>
              <Image src={arrowUp} alt="Prev arrow" />
            </div>
            <div className={styles.customnext}>
              <Image src={arrowDown} alt="Next arrow" />
            </div>
          </div>
          <div className={styles.carouselcontent}>
            <Swiper
              speed={600}
              parallax={true}
              navigation={{
                nextEl: `.${styles.customnext}`,
                prevEl: `.${styles.customprev}`,
              }}
              modules={[Parallax, Pagination, Navigation]}
              slidesPerView={2.7}
              slidesPerGroup={1}
              spaceBetween={10}
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <Card name={card.name} text={card.text} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      </AnimatedDiv>
    </div>
  );
};

export default ReviewsSection;

const Card = ({ name, text }) => {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.cardtop}>
      <p className={styles.cardtext}>{text}</p>
      </div>
      <div className={styles.cardbottom}>
  <p className={styles.cardname}>{name}</p>
  </div>
 
    </div>
  );
};
