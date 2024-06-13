import React, {useState} from 'react';
import styles from './styles.module.scss';
import Cursor from '@/components/Cursor';

export default function Description() {

  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.container}>
      <p className={styles.text} onMouseOver={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}}>
        The quick brown fox jumps over the lazy dog
      </p>
      <Cursor isActive={isActive}/>
    </div>
  );
}