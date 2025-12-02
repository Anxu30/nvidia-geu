import React from "react";
import "./Policies.css";

const sections = [
  {
    title: "1. Job Management",
    bullets: [
      "Use job schedulers for all computational tasks.",
      "Specify wall time, memory, and CPU requirements properly.",
      "Submit test jobs before running large-scale simulations.",
    ],
  },
  {
    title: "2. Data Management",
    bullets: [
      "Store project data in designated directories only.",
      "Backup important data regularly.",
      "Clean up temporary files after job completion.",
    ],
  },
  {
    title: "3. Code Optimization",
    bullets: [
      "Use parallel programming (MPI/OpenMP) where possible.",
      "Profile your code to identify bottlenecks.",
      "Utilize optimized libraries (BLAS, LAPACK, CUDA, etc.).",
    ],
  },
];

const Policies = () => {
  return (
    <section className="policies-shell">
      <div className="policies-hero">
        <p className="eyebrow">Governance</p>
        <h1>HPC Best Practices</h1>
        <p>
          Follow these best practices to ensure efficient and responsible use of the GEU
          Supercomputing Facility.
        </p>
      </div>

      <div className="policies-grid">
        {sections.map((section) => (
          <article key={section.title} className="policy-card">
            <h2>{section.title}</h2>
            <ul>
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="policies-footer">
        For any questions, contact the AI &amp; HPC Support Team at{" "}
        <a href="mailto:nvidiaaihpc@geu.ac.in">nvidiaaihpc@geu.ac.in</a>.
      </p>
    </section>
  );
};

export default Policies;
