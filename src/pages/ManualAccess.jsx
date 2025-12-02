import React from "react";
import "./ManualAccess.css";    
import HamburgerMenu from "../components/HamburgerMenu";
const ManualAccess = () => {
  return (
    <section className="manual-shell">
      <HamburgerMenu />
      <div className="manual-hero">
        <h1>User Access Manual for NVIDIA DGX B200 System</h1>
        <p>
          NVIDIA Centre for AI and HPC
          <br />
          Graphic Era (Deemed to be University)
        </p>
      </div>

      <div className="manual-grid">
        <article className="manual-card" aria-labelledby="access-credentials">
          <h2 id="access-credentials">1. Access Credentials</h2>
          <p>
            Dear Sir/Madam,
            <br />
            Your access details for the NVIDIA DGX B200 system are as follows:
          </p>
          <ul>
            <li>PORT NUMBER: <strong>XXXX</strong> (allocated Port Number)</li>
            <li>TOKEN: <strong>YYYYYYYYYYYYYYYYYYYY</strong> (allocated Token Number)</li>
          </ul>
          <p>
            You have been allocated DGX access for <strong>XX days</strong>. After completing your work, please
            confirm by email so your assigned resources can be released.
          </p>
        </article>

        <article className="manual-card" aria-labelledby="system-details">
          <h2 id="system-details">2. System Details</h2>
          <table className="manual-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>System Name</td>
                <td>NVIDIA DGX B200</td>
              </tr>
              <tr>
                <td>Access Type</td>
                <td>Remote (Jupyter Interface)</td>
              </tr>
              <tr>
                <td>Network Restriction</td>
                <td>Accessible only within GEU Network</td>
              </tr>
            </tbody>
          </table>
        </article>

        <article className="manual-card" aria-labelledby="access-procedure">
          <h2 id="access-procedure">3. Access Procedure</h2>
          <ol>
            <li>Open a web browser (Chrome or Firefox recommended).</li>
            <li>Enter the URL: <code>172.16.1.90:XXXX</code> (replace XXXX with your allocated port number).</li>
            <li>Login using your assigned token: <strong>YYYYYYYYYYYYYYYYYYY</strong>.</li>
            <li>You will be redirected to the JupyterLab interface.</li>
            <li>Open the Terminal from Launcher menu or File → New → Terminal.</li>
            <li>Verify allocated GPU resources by running: <code>nvidia-smi</code>.</li>
            <li>Upload your project files and datasets.</li>
            <li>Create or open a Jupyter notebook to begin work.</li>
            <li>Regularly save outputs and backup your data.</li>
          </ol>
        </article>

        <article className="manual-card" aria-labelledby="usage-guidelines">
          <h2 id="usage-guidelines">4. Usage Guidelines</h2>
          <ul>
            <li>DGX system usage is strictly academic/research only.</li>
            <li>Access restricted to GEU internal network.</li>
            <li>Do not share your credentials or token.</li>
            <li>Backup all data before access expiration.</li>
            <li>Contact AI & HPC Support Team for technical issues.</li>
          </ul>
          <p><strong>Acknowledgment Requirement:</strong></p>
          <blockquote>
            “This research utilized the NVIDIA DGX B200 system provided by the NVIDIA Centre for AI and HPC, Graphic Era (Deemed to be) University.”
          </blockquote>
        </article>

        <article className="manual-card" aria-labelledby="support-info">
          <h2 id="support-info">5. Support and Contact Information</h2>
          <p>For assistance or troubleshooting, contact the AI & HPC Support Team:</p>
          <ul>
            <li>📧 Email: <a href="mailto:nvidiaaihpc@geu.ac.in">nvidiaaihpc@geu.ac.in</a></li>
            <li>📞 WhatsApp (Support Only): 9897755009, 9548283808</li>
          </ul>
        </article>
      </div>

      <p className="manual-footer">
        Regards,
        <br />
        <strong>NVIDIA Centre for AI and HPC</strong>
        <br />
        Graphic Era (Deemed to be University)
      </p>
    </section>
  );
};

export default ManualAccess;
