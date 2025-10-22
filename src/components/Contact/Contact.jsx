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
        <p>Feel free to reach out — I'm available for freelance or full-time roles.</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <span className={styles.icon} aria-hidden="true">
            <img src={emailIcon} alt="Email icon" />
          </span>
          <a href="mailto:tazeemtayob17@gmail.com" aria-label="Send email to Tazeem">
            tazeemtayob17@gmail.com
          </a>
        </li>

        <li className={styles.link}>
          <span className={styles.icon} aria-hidden="true">
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </span>
          <a
            href="https://www.linkedin.com/in/tazeem-tayob-b3a0122aa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
          >
            linkedin.com/TazeemTayob
          </a>
        </li>

        <li className={styles.link}>
          <span className={styles.icon} aria-hidden="true">
            <img src={githubIcon} alt="Github icon" />
          </span>
          <a
            href="https://www.github.com/TazeemTayob17"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
          >
            github.com/TazeemTayob17
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
