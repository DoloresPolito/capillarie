import React from 'react'
import styles from './styles.module.scss';
import Team from '@/about/Team';

export default function DescriptionParallax({teamtranslations}) {
    return (
        <div className={styles.container}>
            <Team teamtranslations={teamtranslations}/>
        </div>
    )
}