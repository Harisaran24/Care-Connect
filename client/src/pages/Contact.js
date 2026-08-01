import React, { useState } from "react";
import "./styles/Contact.css";
import { db } from "./FirebaseConfig"; // Ensure this path is correct
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = () => {
  // Form state
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "messages"), {
        ...form,
        createdAt: serverTimestamp()
      });

      alert("Message sent successfully!");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending message: ", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="contact-container">
      {/* Contact Header */}
      <h1 className="contact-title">📞 Get in Touch with Us</h1>
      <p className="contact-intro">
        We’d love to hear from you! Whether you have questions, want to support
        our cause, or need assistance, our team is here to help.
      </p>

      {/* Contact Details Section */}
      <div className="contact-details">
        <div className="contact-info">
          <h3>📍 Address</h3>
          <p>Care Connect Foundation, 123 Hope Street, Chennai, India – 600001</p>

          <h3>📧 Email</h3>
          <p>support@careconnect.org</p>

          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>

          <h3>⏰ Working Hours</h3>
          <p>Monday - Saturday: 9 AM - 6 PM</p>
          <p>Sunday: Closed</p>
        </div>

        {/* Google Map Embed with Chennai Marker */}
        <div className="contact-map">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31113.029541278785!2d80.20719494875792!3d13.082680141620012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d7d55ba351%3A0x7b0a6c7be6f776a4!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1710800000000"
            width="100%"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>📩 Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (Optional)"
            value={form.phone}
            onChange={handleChange}
          />
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select Subject</option>
            <option value="Inquiry">Inquiry</option>
            <option value="Donation">Donation</option>
            <option value="Volunteering">Volunteering</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="social-media">
        <h2>📢 Follow Us</h2>
        <p>Stay connected for updates & stories:</p>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          📷 Instagram
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          👍 Facebook
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          🐦 Twitter
        </a>
      </div>
    </div>
  );
};

export default Contact;

