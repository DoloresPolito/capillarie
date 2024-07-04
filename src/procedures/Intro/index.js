'use client';
import React, { useLayoutEffect, useRef } from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {

    const backgroundImage = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect( () => {
     

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                // end: "+=500px",
            },
        })

        timeline
            .from(backgroundImage.current, {clipPath: `inset(15%)`})
            .to(introImage.current, {height: "200px"}, 0)
    }, [])

    return (
        <div className={styles.intro}>
            <div className={styles.backgroundImage} 
            >
                <Image 
                    src={'/assets/backgrounds/backcover.png'}
                    fill={true}
                    alt="background image"
                />
            </div>
            <div className={styles.introContainer}>
                    {/* <div
                     ref={introImage} 
                    data-scroll data-scroll-speed="0.3" 
                    className={styles.introImage}>
                        <Image
                            src={'/images/intro.png'}
                            alt="intro image"
                            fill={true} 
                            // priority={true}
                        />
                    </div>
                    <h1 
                    data-scroll data-scroll-speed="0.7"
                    >SMOOTH SCROLL</h1> */}
             </div>
        </div>
    )
}