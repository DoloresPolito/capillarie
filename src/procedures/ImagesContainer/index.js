import styles from "./styles.module.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, Power2 } from "gsap/all";
import Image from "next/image";
import image1 from "../../../public/assets/images/t1.png";
import tic from "../../../public/assets/tic.svg";
import AnimatedDiv from "../../components/AnimatedDiv";

gsap.registerPlugin(ScrollTrigger);

const data = Array(3).fill({
  image: image1,
});

export default function ImagesContainer() {
  const ref1 = useRef(null);
  const itemsRef = useRef([]);
  itemsRef.current = [];

  useEffect(() => {
    itemsRef.current.map((item) => {
      gsap.fromTo(
        item,
        {
          autoAlpha: 0,
          scale: 1,
          ease: Power2,
          clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)",
        },
        {
          duration: 1.5,
          autoAlpha: 1,
          scale: 1.5,
          ease: Power2,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scrollTrigger: {
            trigger: item,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [ref1, itemsRef]);

  const addToRefs = (item) => {
    if (item) {
      itemsRef.current.push(item);
    }
  };

  return (
    <div className={styles.maincontainer}>
      {data.map(({ image }, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            className={`${styles.treatcontainer} ${
              isEven ? styles.even : styles.odd
            }`}
            key={index}
          >
            <div className={styles.treattext}>
              <h3>
                Platelet-Rich Plasma (PRP) therapy utilizes patients own blood
                to silumlate hair growth and improve hair density.
              </h3>

              <AnimatedDiv>
                <div className={styles.benefitscontainer}>
                  {[
                    "Derived from the patient's own blood, reducing the risk of rejections.",
                    "Only requires a dermatological evaluation before treatment.",
                    "Effective in stimulating new hair growth and increasing the thickness of existing hair.",
                    "Finance it easily, from €60/month. ",
                  ].map((item, index) => (
                    <div key={index} className={styles.benefit}>
                      <Image src={tic} alt="tic" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </AnimatedDiv>
              <p>
                Typically involves 4-6 sessions per year, spaced 4-6 weeks
                apart.
                <br />
                Results are often noticeable from the second session onwards.
              </p>
            </div>
            <div className={styles.imagecontainer}>
              <Image src={image} alt="" ref={addToRefs} />
            </div>
          </div>
        );
      })}
      <div className={styles.box2}></div>
    </div>
  );
}
