import React, { useState } from "react";
import emailjs from "emailjs-com";
import { message } from "antd";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    type: "influencer",
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_hmakres",
        "template_x3ujdbx",
        {
          contact_type: formData.type,
          from_name: formData.name,
          message: formData.message,
        },
        "haNEllZFoDFSgLVVG"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          message.success("Message submitted successfully!");
          setFormData({ type: "influencer", name: "", message: "" });
        },
        (error) => {
          console.error("Email sending error:", error.text);
          message.error("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="contact-form-section" id="contact-form">
      <h2 className="section-title">Contact Us</h2>
      <p className="section-subtitle">
        Get in touch with your favorite influencer or brand partner
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Contact Type:
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="form-input"
          >
            <option value="influencer">Influencer</option>
            <option value="brand">Brand</option>
          </select>
        </label>

        <label>
          {formData.type === "influencer"
            ? "Influencer Name (with ownership if needed)"
            : "Brand Name (with ownership if needed)"}
          :
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder={
              formData.type === "influencer"
                ? "e.g., Sophia (Manager: John)"
                : "e.g., Nike (Owned by Mark)"
            }
            required
          />
        </label>

        <label>
          Your Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            rows="4"
            required
          ></textarea>
        </label>

        <button type="submit" className="btn-primary">
          Submit Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
