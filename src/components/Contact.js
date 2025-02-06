import React from "react";
function Contact() {
  return (
    <section id="contact" >
    <div className="Contact">
      <h2>Contact Me</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <p>You can also reach me at: your-email@example.com</p>
    </div>
    </section>
  );
}

export default Contact;