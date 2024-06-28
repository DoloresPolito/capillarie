import React, {useState} from 'react';
import styles from './styles.module.scss';


export default function Description() {

 
  return (
    <div className={styles.container}>
      <p className={styles.text} >
        The quick brown fox jumps over the lazy dog
      </p>

    </div>
  );
}