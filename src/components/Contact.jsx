import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log('Sending email...');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      form.current.reset();
      setTimeout(() => setSubmitStatus(null), 5000);
    })
    .catch((error) => {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="contact-subtitle">
            Have a project in mind? I'd love to discuss your ideas and explore how we can collaborate to bring them to life.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="from_name" 
              placeholder="Enter your full name"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="from_email" 
              placeholder="Enter your email address"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Tell me about your project or idea..."
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
          {submitStatus === 'success' && (
            <p style={{ color: '#6bcf7f', marginTop: '1rem' }}>
              ✅ Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {submitStatus === 'error' && (
            <p style={{ color: '#ff6b6b', marginTop: '1rem' }}>
              ❌ Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
