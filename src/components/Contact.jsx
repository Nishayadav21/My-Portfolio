import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2peiquk",
        "template_bmjfxnr",
        form.current,
        "YsX2LtQkrwXYf-mml"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("❌ Failed to send message.");
      });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out anytime.</p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>

          <p>📧 yadavnisha1289@gmail.com</p>
          <p>📱 +977 9820345144</p>
          <p>📍 Nepal</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;