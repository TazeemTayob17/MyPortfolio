// ...existing code...
import React, { useState } from "react";
import styles from "./ContactTest.module.css";

const RECIPIENT = "tazeemtayob17@gmail.com";

function ContactTest() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // "error" | "sent"
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email looks invalid.";
    if (!form.message.trim()) e.message = "Please write a short message.";
    return e;
  }

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((errs) => ({ ...errs, [e.target.name]: undefined }));
    setStatus(null);
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      setStatus("error");
      return;
    }

    // Build mailto link (opens user's mail client). Keeps everything client-side.
    const subject = form.subject || `Message from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      form.message,
      "",
      "— Sent from portfolio contact form",
    ].join("\n");

    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open user's mail client
    window.location.href = mailto;

    // show ephemeral UI feedback (can't reliably detect send)
    setStatus("sent");
    setTimeout(() => setStatus(null), 4000);
  }

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>Contact</h2>
          <p>
            I'd love to hear about your project or opportunity. Fill out the
            form and your email client will open so you can send the message.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <label className={styles.field}>
              <span className={styles.labelText}>Your name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? styles.inputError : ""}
                placeholder="Jane Doe"
                autoComplete="name"
                required
              />
              {errors.name && <small className={styles.error}>{errors.name}</small>}
            </label>

            <label className={styles.field}>
              <span className={styles.labelText}>Your email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? styles.inputError : ""}
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
              {errors.email && <small className={styles.error}>{errors.email}</small>}
            </label>
          </div>

          <label className={styles.field}>
            <span className={styles.labelText}>Subject</span>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Brief subject (optional)"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.labelText}>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className={errors.message ? styles.inputError : ""}
              placeholder="Write a short message..."
              rows={6}
              required
            />
            {errors.message && <small className={styles.error}>{errors.message}</small>}
          </label>

          <div className={styles.actions}>
            <button type="submit" className={styles.primary}>
              Send message
            </button>
            <a
              className={styles.secondary}
              href={`mailto:${RECIPIENT}`}
              onClick={() => setStatus(null)}
            >
              Open email client
            </a>
          </div>

          {status === "sent" && <div className={styles.note}>Mail client opened — please send the email from there.</div>}
          {status === "error" && <div className={styles.noteError}>Please fix the errors above.</div>}
        </form>
      </div>
    </section>
  );
}

export default ContactTest;