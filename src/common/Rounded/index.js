import React from "react";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";


export default function Index({
  children,
  border,
  ...attributes
}) {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect(() => {
    console.log("BORDER EN ROUNDED", border)
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
   
      <div
        className={styles.roundedButton}
        style={{ overflow: "hidden", border: border ? "1px solid white" : "0.5px solid #3a4749" }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {/* <p className={styles.buttontext}> */}
        {children}
        {/* </p> */}

        <div
          ref={circle}
          className={styles.circle}
        ></div>
      </div>

  );
}