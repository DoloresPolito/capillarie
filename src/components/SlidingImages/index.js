import styles from "./styles.module.scss";
import Image from "next/image";
import Loop from "../../components/Loop";
import img1 from "/public/assets/results/1.png";
import img2 from "/public/assets/results/2.png";
import img3 from "/public/assets/results/3.png";
import img4 from "/public/assets/results/4.png";
import img5 from "/public/assets/results/5.png";
import img6 from "/public/assets/results/6.png";

export default function Index() {

return(  <div className={styles.customersSection}>
  <div className={styles.customersContainer}>
    <Loop
      reverse="true"
      content={
        <>
          <Image src={img1} alt="fortnite"  loading="eager" />
          <Image
            src={img2}
            alt="crunchyroll"
     
            loading="eager" 
          />
          <Image src={img3} alt="freefire"  loading="eager" />
          <Image src={img4} alt="minecraft"  loading="eager" />
          <Image
            src={img5}
            alt="mobilelegends"
    
            loading="eager" 
          />
          <Image src={img6} alt="pubg"  loading="eager" />
          
        </>
      }
    />
  </div>
</div>)
}

