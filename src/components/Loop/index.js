import React from 'react';
import styles from './styles.module.scss';

const Loop = ({ content, reverse }) => (
  <div className={`${styles.loopSection} ${reverse ? styles.reverse : ''}`}>
    <div className={styles.blocks}>
      <div className={styles.contents}>
        <span className={`${styles.firstBlock} ${reverse ? styles.reverse : ''}`}>{content}</span>
        <span className={`${styles.secondBlock} ${reverse ? styles.reverse : ''}`}>{content}</span>
      </div>
    </div>
  </div>
);

export default Loop;