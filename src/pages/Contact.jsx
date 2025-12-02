import React from "react";
import "./Contact.css";
import Hamburger from "../components/HamburgerMenu";

const Contact = () => {
  return (
    <section className="contact-shell">
      <Hamburger />

      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          For technical assistance, queries, or collaboration opportunities,
          please reach out to us.
        </p>
      </div>

      <div className="contact-grid">
        <article className="contact-card">
          <p>
            <strong>
              AI and HPC Team<br />
              Centre for Artificial Intelligence and High Performance Computing,<br />
              Graphic Era (Deemed to be University),<br />
            </strong>
            566/6, Bell Road, Society Area,<br />
            Clement Town, Dehradun-248002<br />
            Uttarakhand (INDIA)
          </p>

          <p>
            📧 Email:{" "}
            <a href="mailto:nvidiaaihpc@geu.ac.in">
              nvidiaaihpc@geu.ac.in
            </a>
          </p>
          <p>📞 Phone: +91 9897755009</p>
        </article>

        <article className="contact-card hours-card">
          <h3>Working Hours</h3>
          <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
        </article>
      </div>
    </section>
  );
};

export default Contact;
