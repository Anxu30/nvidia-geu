import React from "react";
import "./AdminNotes.css";
import HamburgerMenu from "../components/HamburgerMenu";
const upcomingBlocks = [
  {
    title: "Maintenance bulletins",
    description:
      "A rolling log that summarizes firmware updates, downtime windows, and networking rewires. Expect the first bulletin as soon as internal validation is complete.",
    status: "Target: January release",
  },
  {
    title: "Job submission best practices",
    description:
      "Condensed guidance for Slurm templates, GPU partition etiquette, and sample profiling workflows. Drafting is underway with the operations team.",
    status: "Drafting in progress",
  },
  {
    title: "Software catalog & access",
    description:
      "Centralized information on licensed applications, container registries, and custom images maintained by the AI & HPC team.",
    status: "Pending automation hand-off",
  },
];

const AdminNotes = () => {
  return (
    <section className="admin-shell">
      <HamburgerMenu />
      <div className="admin-hero">
        <p className="eyebrow">Operations</p>
        <h1>Administrator notes are on the way</h1>
        <p>
          We are preparing detailed updates covering maintenance windows, scheduling policies, and
          curated software stacks. In the meantime, refer to the helpdesk for urgent queries.
        </p>
      </div>

      <div className="admin-grid">
        <article className="admin-card intro-card">
          <h2>What to expect</h2>
          <p>
            The Admin Notes section will consolidate everything cluster operators normally share in
            meetings—change logs, troubleshooting references, and roadmap visibility for upcoming
            feature roll-outs.
          </p>
          <ul>
            <li>Transparent status on compute, storage, and network upgrades</li>
            <li>Guides for job monitoring and performance triage</li>
            <li>Contact points for different service queues</li>
          </ul>
        </article>

        {upcomingBlocks.map((block) => (
          <article key={block.title} className="admin-card planned-card">
            <h3>{block.title}</h3>
            <p>{block.description}</p>
            <span className="status-pill">{block.status}</span>
          </article>
        ))}
      </div>

      <div className="admin-placeholder">
        <p>
          ⚠️ Full content will be posted soon. Check back for the finalized admin handbook and live
          notifications.
        </p>
      </div>

      <div className="admin-meta">
        <div className="meta-card">
          <h4>Need help now?</h4>
          <p>
            Email <a href="mailto:nvidiaaihpc@geu.ac.in">nvidiaaihpc@geu.ac.in</a> or reach the AI &amp; HPC
            desk at +91 9897755009 for immediate assistance.
          </p>
        </div>
        <div className="meta-card">
          <h4>Feedback loop</h4>
          <p>
            Have a topic you would like documented? Share it with the operations team so we can fold
            it into the Admin Notes backlog.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdminNotes;
