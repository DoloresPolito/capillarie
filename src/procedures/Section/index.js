import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './styles.module.css';

gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  const rightSectionRef = useRef(null);

  useEffect(() => {
    gsap.to(rightSectionRef.current, {
      y: () => -(rightSectionRef.current.scrollHeight - window.innerHeight),
      ease: 'none',
      scrollTrigger: {
        trigger: rightSectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h1>Contenido Fijo</h1>
      </div>
      <div className={styles.rightSection} ref={rightSectionRef}>
        <div className={styles.content}>
          {/* Contenido que puede scrollear */}
          <p>Parrafo 1...</p>
          <p>Parrafo 2...</p>
          {/* Añade más contenido según sea necesario */}
        </div>
      </div>
    </div>
  );
};

export default Section;