import React from "react";
import "./Publications.css";
import Hamburger from "../components/HamburgerMenu";

const Publications = () => {
  return (
    <section className="pub-shell">
      <Hamburger />

      <div className="pub-hero">
        <p className="eyebrow">Research</p>
        <h1>Publications – GEU Supercomputing Facility</h1>
        <p>
          ⚠️ The content for this page will be available soon. Please check back later for updates on
          publications, research papers, and reports related to the GEU Supercomputing Facility.
        </p>
      </div>

      <article className="pub-card">
        <h2>Content coming soon</h2>
        <p>
          Official listings of conference papers, journal articles, and collaborative reports powered by the
          DGX environment are being curated. Once live, you will be able to filter publications by discipline,
          year, or research group.
        </p>
        <p>
          For interim information, contact the AI &amp; HPC team at{" "}
          <a href="mailto:nvidiaaihpc@geu.ac.in">nvidiaaihpc@geu.ac.in</a>.
        </p>
      </article>
    </section>
  );
};

export default Publications;
