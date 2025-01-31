import React from "react";
import "./Contact.css"; // Make sure this file is correctly linked

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="section-header">Contact</h1>

      <div className="contact-wrapper" id="contact">
        <form id="contact-form" className="form-container">
          <input
            type="text"
            className="form-input"
            id="name"
            placeholder="NAME"
            name="name"
            required
          />
          <input
            type="email"
            className="form-input"
            id="email"
            placeholder="EMAIL"
            name="email"
            required
          />
          <textarea
            className="form-textarea"
            rows="5"
            placeholder="MESSAGE"
            name="message"
            required
          ></textarea>

          <button className="send-button" id="submit" type="submit">
            <i className="fa fa-paper-plane"></i> <span> SEND </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
