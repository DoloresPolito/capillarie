import styles from "./styles.module.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, Power2 } from "gsap/all";
import Image from "next/image";
import image1 from "../../../public/assets/images/t1.png";

gsap.registerPlugin(ScrollTrigger);

const data = Array(3).fill({
  image: image1,
});

export default function ImagesContainer() {
  const ref1 = useRef(null);
  const itemsRef = useRef([]);
  itemsRef.current = [];

  useEffect(() => {

    itemsRef.current.map((item, index) => {
      gsap.fromTo(
        item,
        {
          autoAlpha: 0,
          scale: 1,
          ease: Power2,
          clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)",
        },
        {
          duration: 1,
          autoAlpha: 1,
          scale: 1,
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
        return (
       
            <div className={styles.treatcontainer} key={index}>
              <div className={styles.treattext}>
                <h2>texto</h2>
              </div>
              <div className={styles.imagecontainer} >
                <Image
                  src={image}
                  alt=""
                  width={500}
                  height={500}
                  ref={addToRefs}
                />
              </div>
            </div>
       
        );
      })}
      <div className={styles.box2}>
        <p>hola</p>
      </div>
    </div>
  );
}
