import React, { useState } from "react";
import { send, init } from "@emailjs/browser";
import styles from "./ContactTest.module.css"; // keep your styling

// initialize EmailJS public key
init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

function ContactTest() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email looks invalid.";
    if (!form.message.trim()) e.message = "Please write a short message.";
    return e;
  }

  function handleChange(ev) {
    const { name, value } = ev.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setStatus(null);
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      setStatus("error");
      return;
    }

    setStatus("sending");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject || `Message from ${form.name}`,
      message: form.message,
    };

    try {
      await send(serviceId, templateId, templateParams);
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      // clear status after a short time
      setTimeout(() => setStatus(null), 4000);
    } catch (err) {
      console.error("EmailJS send error:", err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>Contact Me</h2>
          <p>
            I&apos;d love to hear from you — send me a message below!
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
                placeholder="Jane Doe"
                autoComplete="name"
              />
              {errors.name && (
                <small className={styles.error}>{errors.name}</small>
              )}
            </label>

            <label className={styles.field}>
              <span className={styles.labelText}>Your email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                autoComplete="email"
              />
              {errors.email && (
                <small className={styles.error}>{errors.email}</small>
              )}
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
              placeholder="Write a short message..."
              rows={6}
            />
            {errors.message && (
              <small className={styles.error}>{errors.message}</small>
            )}
          </label>

          <div className={styles.actions}>
            <button
              type="submit"
              className={styles.primary}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            <button
              type="button"
              className={styles.secondary}
              onClick={() => {
                setForm({ name: "", email: "", subject: "", message: "" });
                setErrors({});
                setStatus(null);
              }}
            >
              Clear
            </button>
          </div>

          {status === "sent" && (
            <div className={styles.note}>
              Message sent — thanks! I will respond soon.
            </div>
          )}
          {status === "error" && (
            <div className={styles.noteError}>
              Failed to send message. Please try again later.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactTest;
