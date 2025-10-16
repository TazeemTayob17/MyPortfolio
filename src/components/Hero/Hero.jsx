import React from "react";
import heroImage from "../../assets/hero/heroImage.png";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tazeem</h1>
        <p className={styles.description}>
          I'm a BSc Computer Science and Mathematics student at University of
          the Witwatersrand
        </p>
        <a href="mailto:tazeemtayob17@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={heroImage} alt="hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
