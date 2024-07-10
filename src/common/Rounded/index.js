import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";

export default function Index({
  children,
  border,
  background = "#44b9cc",
  hoverColor = "white", 
  
  footer,
  // Color de texto en hover pasado como prop
  ...attributes
}) {
  const [hover, setHover] = useState(false);
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    console.log("BORDER EN ROUNDED", border);
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
    setHover(true);
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
      setHover(false);
    }, 300);
  };

  return (
    <div
      className={styles.roundedButton}
      style={{
        overflow: "hidden",
        border: border ? "1px solid white" : "1px solid #3a4749",
        color: hover ? hoverColor : footer ? "white" : "#493E36", // Cambiar color de texto en hover
      }}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      {...attributes}
    >
      {children}
      <div
        ref={circle}
        className={styles.circle}
        style={{ backgroundColor: background }}
      ></div>
    </div>
  );
}