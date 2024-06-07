"use client";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import arrowright from "../../../public/assets/reviews/arrow-right.png";
import arrowleft from "../../../public/assets/reviews/arrow-left.png";
import Image from "next/image";

const ReviewsSection = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <h6>REVIEWS</h6>
          <h3>Read what our patients think about Capillarie</h3>
          <p>
            No one can convey an experience and opinion better than our clients.
          </p>

          <div className={styles.carouselcontainer}>
            <Swiper
              speed={600}
              parallax={true}
              // navigation={true}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              modules={[Parallax, Pagination, Navigation]}
            >
              <SwiperSlide>
                <div className={styles.swiperslide}>
                  <Card />
                  <Card />
                  <Card />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.swiperslide}>
                  <Card />
                  <Card />
                  <Card />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.swiperslide}>
                  <Card />
                  <Card />
                  <Card />
                </div>
              </SwiperSlide>
              <div className="custom-next">
                <Image src={arrowright} alt="arrow" />
              </div>
              <div className="custom-prev">
                <Image src={arrowleft} alt="arrow" />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsSection;

const Card = () => {
  return (
    <>
      <div className={styles.cardcontainer}>
        <p className={styles.cardname}>Dolores Polito</p>

        <p className={styles.cardtext}>
          Thank you very much Pablo. I feel happy about the result. Without a
          doubt, confidence before and after the transplant is very important.
          My change was incredible in 4 months Thank you so much!
        </p>
      </div>
    </>
  );
};
