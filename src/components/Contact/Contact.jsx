import React from "react";

import styles from "./Contact.module.css";
//import getImageUrl from "../../utils";
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:tazeemtayob17@gmail.com">tazeemtayob17@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/tazeem-tayob-b3a0122aa">
            linkedin.com/Tazeem Tayob
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://www.github.com/TazeemTayob17">
            github.com/TazeemTayob17
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
