import React, { useState, useEffect } from "react";
import heroImage from "../../assets/hero/profileImage.png";
import styles from "./Hero.module.css";
import CV from "../../assets/CV.pdf";

function Hero() {
  const fullText =
    "I'm a BSc Computer Science and Mathematics student at the University of the Witwatersrand";

  const [typed, setTyped] = useState("");

  useEffect(() => {
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

  // new: navigate to contact section or to /contact if not present
  function handleContactClick(e) {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // also update URL hash without reloading
      history.replaceState(null, "", "#contact");
    } else {
      // fallback to route/page named /contact
      window.location.href = "/contact";
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Tazeem Tayob</h1>
        <p className={styles.description}>
          <span className={styles.typeText}>{typed}</span>
        </p>

        <div className={styles.social}>
          <a
            className={styles.socialBtn}
            href="mailto:tazeemtayob17@gmail.com"
            data-label="Email: tazeemtayob17@gmail.com"
            title="Send email"
            aria-label="Email"
          >
            {/* material icon from Google Fonts (envelope) */}
            <span className={styles.mailIcon} aria-hidden="true">
              email
            </span>
          </a>

          <a
            className={`${styles.socialBtn} ${styles.github}`}
            href="https://github.com/TazeemTayob17"
            target="_blank"
            rel="noopener noreferrer"
            data-label="GitHub"
            title="Open GitHub profile"
            aria-label="GitHub"
          >
            {/* github icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2C7.58 2 4 5.58 4 10c0 3.54 2.29 6.54 5.47 7.6.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.57 7.57 0 0 1 2.01-.27c.68 0 1.37.09 2.01.27 1.53-1.03 2.2-.82 2.2-.82.45 1.1.17 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.01 8.01 0 0 0 20 10c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>

          <a
            className={styles.socialBtn}
            href="https://www.linkedin.com/in/tazeem-tayob-b3a0122aa"
            target="_blank"
            rel="noopener noreferrer"
            data-label="LinkedIn"
            title="Open LinkedIn profile"
            aria-label="LinkedIn"
          >
            {/* linkedin icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5v14H0v-14zM8 8.5h4.78v1.93h.07c.66-1.25 2.28-2.57 4.7-2.57 5.02 0 5.95 3.31 5.95 7.61v8.03H19v-7.12c0-1.7-.03-3.9-2.38-3.9-2.38 0-2.74 1.85-2.74 3.77v7.25H8v-14z" />
            </svg>
          </a>
        </div>

        <div className={styles.actions}>
          <a href={CV} download className={styles.CVbtn}>
            Download CV
          </a>
          {/* changed: button now scrolls to contact section (or navigates to /contact) */}
          <button
            type="button"
            className={styles.contactBtn}
            onClick={handleContactClick}
            aria-label="Go to contact form"
          >
            Contact Me
          </button>
        </div>
      </div>
      <img src={heroImage} alt="hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
