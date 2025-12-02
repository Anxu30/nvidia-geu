// RequestServiceWithDownload.jsx
import React from "react";
import "./RequestService.css";

const RequestServiceWithDownload = () => {
  // If you put the file in public/docs/Request_DGX_B200.docx
  const docUrl = "/docs/Request_DGX_B200.docx";

  return (
    <section className="service-shell">
      <div className="service-hero">
        <h1>NVIDIA DGX B200 System Access Announcement</h1>
        <p>
          We are pleased to inform you that the <strong>NVIDIA DGX B200 system</strong>, established under
          the <strong>NVIDIA Centre for Artificial Intelligence and High Performance Computing</strong> at
          <strong> Graphic Era (Deemed to be University)</strong>, is now available for use by faculty members for
          their research and academic work.
        </p>
      </div>

      <article className="service-card">
        <p>
          Faculty members who wish to use the system may kindly send a request to{" "}
          <a href="mailto:nvidiaaihpc@geu.ac.in">nvidiaaihpc@geu.ac.in</a>, clearly mentioning:
        </p>
        <ol>
          <li>
            <strong>Purpose / Research Requirement –</strong> a brief description of how the DGX system will be
            utilized.
          </li>
          <li>
            <strong>Proposed Duration of Access –</strong> specify the number of days required to complete the
            intended work.
          </li>
        </ol>
        <p>
          Access credentials and usage guidelines will be shared based on system availability. All email
          communications should be made only through <strong>Official University Email IDs.</strong>
        </p>
        <p>The DGX system can be accessed from anywhere within the GEU network.</p>
        <p>
          Students wishing to use this facility must submit their request through their respective faculty
          in-charge, supervisor, or mentor.
        </p>
        <p>
          Faculty members are also requested to kindly acknowledge the use of the NVIDIA DGX hardware setup and
          the NVIDIA DGX Lab at <strong>Graphic Era (Deemed to be University)</strong> in their research papers
          or publications wherever applicable.
        </p>
        <p>
          We encourage all faculty members to make effective use of this advanced computing facility to strengthen
          their research outcomes and projects.
        </p>

        <div style={{ marginTop: 18 }}>
          {/* Simple anchor download - will open in Word if associated */}
          <a
            href={docUrl}
            download="Request_DGX_B200.docx"
            className="download-btn"
            style={{
              display: "inline-block",
              padding: "10px 18px",
              borderRadius: 8,
              background: "linear-gradient(120deg, #5efce8, #736efe)",
              color: "#05102a",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Download DOCX
          </a>
        </div>
      </article>

      <div className="service-footer">
        <p>Regards,</p>
        <p>
          <strong>AI and HPC Team</strong>
          <br />
          Centre for Artificial Intelligence and High Performance Computing,
          <br />
          Graphic Era (Deemed to be University),
          <br />
          566/6, Bell Road, Society Area,
          <br />
          Clement Town, Dehradun-248002,
          <br />
          Uttarakhand (INDIA)
        </p>
      </div>
    </section>
  );
};

export default RequestServiceWithDownload;
