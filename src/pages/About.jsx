import "./About.css";
import Hamburger from "../components/HamburgerMenu";

const pillars = [
 
 
];

const focusAreas = [
  "Large-scale AI model training and fine-tuning",
  "Scientific simulations across engineering and basic sciences",
  "High-throughput data analytics pipelines",
  "Industry and academia co-innovation programs",
];

const About = () => {
  return (
    <section className="about-shell">
      <Hamburger />
      <div className="about-hero">
        <p className="eyebrow">About the facility</p>
        <h1>GEU Supercomputing powers AI-first discovery</h1>
        <p>
          Graphic Era’s Centre for Artificial Intelligence and High Performance Computing
          provides GPU-rich clusters, expert mentorship, and collaborative workspaces to
          help researchers solve complex problems faster.
        </p>
      </div>

      <div className="about-grid">
        <article className="about-card intro-card">
          <h2>Why it matters</h2>
          <p>
            The Supercomputing Facility at Graphic Era (Deemed to be University) equips
            researchers, students, and partners with the compute density needed for AI,
            simulation, and data-intensive workloads. Purpose-built labs, DGX-powered
            infrastructure, and responsive support teams shorten the path from concept to
            results.
          </p>
          <ul>
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </article>

        {pillars.map((pillar) => (
          <article key={pillar.title} className="about-card pillar-card">
            <h3>{pillar.title}</h3>
            <p>{pillar.body}</p>
          </article>
        ))}
      </div>

      <div className="about-highlight">
        <h2>Open collaboration model</h2>
        <p>
          We collaborate with interdisciplinary teams, host workshops, and support proof-of-concept
          engagements that take advantage of scalable compute, high-speed fabric, and curated
          software stacks. The environment is tuned for rapid prototyping without compromising on
          governance or data security.
        </p>
      </div>
    </section>
  );
};

export default About;
