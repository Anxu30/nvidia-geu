import React from "react";
import "./FAQ.css";
import Hamburger from "../components/HamburgerMenu";

const faqs = [
  {
    q: "Who can use the GEU Supercomputing Facility?",
    a: "All GEU faculty members, researchers, and students with approved projects are eligible to use the HPC resources.",
  },
  {
    q: "How can I get access?",
    a: "Submit a request through email. Approval will be provided by the HPC administrator.",
  },
  {
    q: "Can I install my own software?",
    a: "Software installation requests must be submitted via email to the HPC administrator for review.",
  },
];

const FAQ = () => {
  return (
    <section className="faq-shell">
      <Hamburger />

      <div className="faq-hero">
        <p className="eyebrow">Support</p>
        <h1>Frequently Asked Questions</h1>
        <p>
          Quick answers for account access, software approvals, and day-to-day HPC use at the GEU
          Supercomputing Facility.
        </p>
      </div>

      <div className="faq-grid">
        {faqs.map((item, index) => (
          <article key={item.q} className="faq-item">
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
