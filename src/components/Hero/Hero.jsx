import React, { useState, useEffect } from "react";
import heroImage from "../../assets/hero/profileImage.png";
import styles from "./Hero.module.css";
import CV from "../../assets/CV.pdf";

function Hero() {

  const fullText =
    "I'm a BSc Computer Science and Mathematics student at University of the Witwatersrand";

  const [typed, setTyped] = useState("");

  useEffect(() => {
    // respect user's reduced motion preference
    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setTyped(fullText);
      return;
    }

    let i = 0;
    const speed = 50; // ms per character
    const timer = setInterval(() => {
      i += 1;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tazeem Tayob</h1>
        <p className={styles.description}>
          <span className={styles.typeText}>{typed}</span>
          
        </p>
        <div className={styles.actions}>
          <a href={CV} download className={styles.CVbtn}>
          Download CV
          </a>
          <a href="mailto:tazeemtayob17@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a> 
        </div>
      </div>
      <img src={heroImage} alt="hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
