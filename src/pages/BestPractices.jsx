import React from "react";
import "./BestPractices.css";
import HamburgerMenu from "../components/HamburgerMenu";
const policySections = [
  {
    title: "Access",
    description:
      "The NVIDIA DGX environment is provisioned exclusively for faculty members, research scholars, and students from GEU and GEHU with approved projects.",
    bullets: [
      "Accounts are issued per individual; sharing credentials is prohibited.",
      "Access is automatically revoked at the end of the approved duration."
    ],
  },
  {
    title: "Usage guidelines",
    description: "Responsible use keeps the cluster responsive for everyone.",
    bullets: [
      "Submit requests to nvidiaaihpc@geu.ac.in with purpose, start/end dates, and resource estimates (GPU / CPU hours, memory, storage).",
      "Manage your datasets, organize workspace directories, and clean up scratch data.",
      "Install software only through the AI & HPC team; external transfers are disallowed without review.",
      "Follow institutional research ethics and cite the facility in publications.",
    ],
  },
  {
    title: "Monitoring & reporting",
    description:
      "Workloads are observed for health, utilization, and security to preserve cluster stability.",
    bullets: [
      "System logs and scheduler metrics are periodically reviewed.",
      "Submit a short utilization report when your project concludes.",
    ],
  },
  {
    title: "Security & compliance",
    description:
      "Sensitive or regulated datasets must adhere to GEU security controls; encrypt data at rest and limit copies.",
    bullets: [
      "Do not move confidential data outside institutional boundaries.",
      "Illegal or unauthorized activity leads to immediate escalation.",
    ],
  },
];

const requestChecklist = [
  "Purpose of usage (research, training, coursework, etc.)",
  "Requested timeframe with expected daily usage",
  "Resources needed: GPU/CPU profile, RAM, storage",
  "Licenses or specialized software required",
];

const acknowledgementText =
  "“The computations were performed on the NVIDIA DGX B200 system at the Centre for Artificial Intelligence & High Performance Computing, Graphic Era Deemed to be University, Dehradun, Uttarakhand, INDIA.”";

const BestPractices = () => {
  return (
    <section className="bp-shell">
      <HamburgerMenu />
      <div className="bp-hero">
        <p className="eyebrow">Policy overview</p>
        <h1>DGX best practices</h1>
        <p>
          These guidelines keep the DGX B200 fleet ready for AI-first research while ensuring data
          security, fairness, and observability across every workload submitted.
        </p>
      </div>

      <div className="bp-grid">
        {policySections.map((section) => (
          <article key={section.title} className="bp-card">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            <ul>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="bp-double">
        <article className="bp-card highlight-card">
          <h3>Request checklist</h3>
          <p>Share the following details when emailing nvidiaaihpc@geu.ac.in.</p>
          <ul>
            {requestChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="bp-card highlight-card">
          <h3>Acknowledgment template</h3>
          <p>{acknowledgementText}</p>
        </article>
      </div>

      <div className="bp-callout">
        <h4>Support & escalation</h4>
        <p>
          For troubleshooting or job tuning, email{" "}
          <a href="mailto:nvidiaaihpc@geu.ac.in">nvidiaaihpc@geu.ac.in</a> with log files, job IDs,
          and error summaries. Urgent incidents should also be reported to the AI &amp; HPC desk via
          +91 9897755009.
        </p>
      </div>

      <footer className="bp-footer">
        <strong>AI and HPC Team</strong>
        <span>
          Centre for Artificial Intelligence and High Performance Computing, Graphic Era (Deemed to
          be University)
        </span>
      </footer>
    </section>
  );
};

export default BestPractices;
