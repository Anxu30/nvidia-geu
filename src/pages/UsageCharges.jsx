import React from "react";
import "./UsageCharges.css";

const UsageCharges = () => {
  return (
    <section className="charges-shell">
      <div className="charges-hero">
        <p className="eyebrow">Policy</p>
        <h1>Usage Charges – GEU Supercomputing Facility</h1>
        <p>
          Detailed information on usage policies, resource allocation, and applicable charges for the{" "}
          <strong>GEU Supercomputing Facility</strong> will be made available soon.
        </p>
      </div>

      <article className="charges-card">
        <h2>⚠️ Content Coming Soon</h2>
        <p>
          Official details regarding CPU, GPU, and high-memory node usage rates, billing policies, and waiver
          criteria are currently being finalized by the{" "}
          <strong>Centre for Artificial Intelligence and High Performance Computing (AI &amp; HPC)</strong>.
        </p>
        <p>
          Please check back later for updated information or refer to upcoming communications from the AI &amp; HPC
          office.
        </p>
        <p>
          For immediate queries or provisional guidance, you may contact the support team at{" "}
          <a href="mailto:nvidiaaihpc@geu.ac.in">nvidiaaihpc@geu.ac.in</a>.
        </p>
      </article>
    </section>
  );
};

export default UsageCharges;
