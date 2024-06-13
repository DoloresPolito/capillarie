import React from 'react';
import styles from './styles.module.scss';
import ContactSection from '@/home/ContactSection';

export default function Footer() {
  return (
    <div className={styles.footerContainer} 

    >
      <div className={styles.innerContainer}>
        <div className={styles.stickyContainer}>
     
          {/* <Content /> */}
          <ContactSection/>
   
   
        </div>
      </div>
    </div>
  );
}