import React from 'react'
import styles from './styles.module.scss';
import AboutSection from '../AboutSection';

export default function DescriptionIntro({abouttranslations}) {
    return (
        <div className={styles.container}>

            <AboutSection abouttranslations={abouttranslations} />
        </div>
    )
}