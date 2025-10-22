import React from "react";

import styles from "./About.module.css";
//import getImageUrl from "../../utils.js";
import cursorIcon from "../../assets/about/cursorIcon.png";
import aboutImage from "../../assets/about/avatar-final.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uilcon from "../../assets/about/uiIcon.png";
 
function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I enjoy building responsive and optimized sites with great user
                experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I enjoy working on backend projects, involving databases, APIs
                and server-side logic.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uilcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem Solving</h3>
              <p>
                I love figuring out how to solve problems, while building great
                software that can be used by everyone!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
