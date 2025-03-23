import React, { useState } from "react";
import FormfacadeEmbed from "@formfacade/embed-react";
import "../styles/contact.css"; // Import CSS file

const ContactSection = ({ theme }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setSubmitted(true);
    console.log("Form submitted successfully!");
  };

  return (
    <div
      className="contactContainer"
      id="contact-section"
      style={{ background: theme === "light" ? "#fff8f5" : "#4f2b1936" }}
    >
      <h2>Contact Me</h2>

      {!submitted ? (
        <FormfacadeEmbed
          formFacadeURL="https://formfacade.com/include/115642571540015370451/form/1FAIpQLScQw385L8rmmPQ5G3lDme_jUqn2eJ21Mc-RBNkXmkf6DvE1GA/classic.js/?div=ff-compose"
          onSubmitForm={handleFormSubmit}
        />
      ) : (
        <div className="message">
          <h4>Thank you for your message!</h4>
          <p>I'll get back to you as soon as possible.</p>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
