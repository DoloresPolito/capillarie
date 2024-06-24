import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { motion, useAnimation, useInView } from "framer-motion";

const defaultAnimations = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const AnimatedText = ({ text, className, once, repeatDelay }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const textArray = Array.isArray(text) ? text : [text];

  useEffect(() => {
    let timeout;
    const show = async () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView, controls, repeatDelay]);

  return (
    <div className={styles.animated}>
      {/* <span className="sr-only">{text}</span> */}
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.02 }, once },
          hidden: {},
        }}
      >
        {textArray.map((line, lineIndex) => (
          <span key={lineIndex} className={styles[className]}>
            {line.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} style={{ display: "inline-block" }}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={defaultAnimations}
                    className={styles.inside}
                  >
                    {char}
                  </motion.span>
                ))}
                <span>&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </div>
  );
};

export default AnimatedText;