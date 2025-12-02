import React from "react";
import "./Infrastructure.css";
import Hamburger from "../components/HamburgerMenu";

const Infrastructure = () => {
  return (
    <section className="infra-shell">
      <Hamburger />

      <div className="infra-hero">
        <p className="eyebrow">Systems</p>
        <h1>Infrastructure Overview</h1>
        <p>
          The <strong>Graphic Era (Deemed to be University) Supercomputing Facility</strong> is
          equipped with advanced High-Performance Computing (HPC) resources, supporting artificial
          intelligence, scientific computation, and innovation-driven research.
        </p>
      </div>

      <div className="infra-grid">
        <article className="infra-card">
          <h2>Why DGX B200 matters</h2>
          <p>
            Purpose-built labs, NVLink interconnects, and curated software stacks allow researchers
            to move from prototype to scaled experimentation without leaving campus.
          </p>
          <ul>
            <li>8× NVIDIA B200 Tensor Core GPUs with 1440 GB total GPU memory</li>
            <li>High-bandwidth fabric for rapid data exchange and multi-node scaling</li>
            <li>Secure remote workflows via Jupyter, container registries, and automation hooks</li>
          </ul>
        </article>

        <article className="infra-card pdf-card">
          <h2>DGX B200 hardware overview</h2>
          <div className="pdf-frame">
            <iframe
              src="/DGX_B200_Hardware[1].pdf#toolbar=0&navpanes=0&scrollbar=0"
              title="DGX B200 Hardware PDF"
            ></iframe>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Infrastructure;
