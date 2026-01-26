import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log('Sending email...');

    emailjs.sendForm(
      "service_q9740dk",
      "template_6ek16tc",
      form.current,
      "-MYgH9wnzKEeR4Qt8"
    )
    .then((result) => {
      console.log('Email sent successfully:', result);
      alert("Message sent successfully! ✅");
      form.current.reset();
    })
    .catch((error) => {
      console.error('Email send failed:', error);
      alert("Failed to send message ❌");
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="contact-subtitle">
            Have a project in mind? I'd love to hear from you.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="from_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="from_email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
