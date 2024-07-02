import styles from "./styles.module.scss";
import Image from "next/image";
import Loop from "../../components/Loop";
// import img1 from "/public/assets/results/1.png";
// import img2 from "/public/assets/results/2.png";
// import img3 from "/public/assets/results/3.png";
// import img4 from "/public/assets/results/4.png";
// import img5 from "/public/assets/results/5.png";
// import img6 from "/public/assets/results/6.png";

import img1 from "/public/assets/results/res1.png";
import img2 from "/public/assets/results/res2.png";
import img3 from "/public/assets/results/res3.png";
import img4 from "/public/assets/results/res4.png";
import img5 from "/public/assets/results/res5.png";
import img6 from "/public/assets/results/res6.png";

export default function Index() {
  return (
    <div className={styles.customersSection}>
      <div className={styles.customersContainer}>
        <Loop
          reverse="true"
          content={
            <>
              <Image
                src={img1}
                alt="img1"
                loading="eager"
                style={{ borderRadius: "50px", height:"250px" }}
              />
              <Image
                src={img2}
                alt="img2"
                loading="eager"
                style={{ borderRadius: "50px", height:"250px"  }}
              />
              <Image
                src={img3}
                alt="img3"
                loading="eager"
                style={{ borderRadius: "50px" , height:"250px" }}
              />
              <Image
                src={img4}
                alt="img4"
                loading="eager"
                style={{ borderRadius: "50px", height:"250px" }}
              />
              <Image
                src={img5}
                alt="img5"
                loading="eager"
                style={{ borderRadius: "50px", height:"250px"  }}
              />
              <Image
                src={img6}
                alt="img6"
                loading="eager"
                style={{ borderRadius: "50px", height:"250px"  }}
              />
            </>
          }
        />
      </div>
    </div>
  );
}
