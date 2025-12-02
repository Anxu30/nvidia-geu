import { Link } from "react-router-dom";
import { FaGlobe, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./Footer.css";

const quickLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/infrastructure", label: "Infrastructure" },
  { path: "/contact", label: "Contact" },
  { path: "/faq", label: "FAQ" },
];

const socialLinks = [
  {
    href: "https://www.geu.ac.in/",
    label: "GEU website",
    icon: <FaGlobe />,
  },
  {
    href: "https://twitter.com/",
    label: "Follow on X",
    icon: <FaXTwitter />,
  },
  {
    href: "https://www.instagram.com/geuofficial?igsh=MTZoMAzZnYxMTc4aA==",
    label: "Follow on Instagram",
    icon: <FaInstagram />,
  },
  {
    href: "https://www.linkedin.com/school/graphic-era-official/",
    label: "Connect on LinkedIn",
    icon: <FaLinkedinIn />,
  },
];

const disclaimerItems = [
  `All information provided on this website is intended solely for the internal use of students and faculty of Graphic Era (Deemed to be University) and Graphic Era Hill University. The purpose of this site is to provide convenient access to general and non-confidential information.`,
  `The content of this website is purely informational and holds no legal validity. It cannot be cited or used as evidence in any court of law.`,
  `This website does not contain privileged, confidential, or restricted information and should be regarded as a generic information source only.`,
  `The material and opinions expressed here do not necessarily represent the official position or policies of the University. Nothing on this site alters or overrides the University Ordinances, rules, or regulations that are issued and updated from time to time.`,
  `No individual, official, or department should infer any formal meaning, decision, or conclusion from the content presented on this site.`,
  `This website is independently maintained by University members as a personal initiative or hobby project. It is not officially affiliated with, hosted by, or endorsed by Graphic Era University or any authorized third party. The domain and hosting are registered in a personal capacity.`,
  `The information displayed may not always be complete, accurate, or up to date. Users are therefore strongly advised to verify all information through official channels before relying upon it.`,
  `This is not an official University webpage.`,
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow" aria-hidden="true" />

      <div className="footer-inner">
        <div className="footer-grid">
          <section className="footer-card about">
            <p className="eyebrow">GEU Supercomputing Facility</p>
            <h3>Accelerating research with HPC + AI</h3>
            <p>
              Dedicated to advancing high-performance computing and research.
              Supporting innovation, collaboration, and cutting-edge science.
            </p>
          </section>

          <nav className="footer-card links" aria-label="Quick links">
            <h4>Navigate</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <section className="footer-card contact">
            <h4>Contact</h4>
            <p>
              AI and HPC Team
              <br />
              Centre for Artificial Intelligence and High Performance Computing
              <br />
              Graphic Era (Deemed to be University)
            </p>
            <p>
              566/6, Bell Road, Society Area,
              <br />
              Clement Town, Dehradun-248002 Uttarakhand (INDIA)
            </p>
            <p>
              📧{" "}
              <a href="mailto:nvidiaaihpc@geu.ac.in">nvidiaaihpc@geu.ac.in</a>
            </p>
            <p>📞 +91 9897755009</p>
          </section>
        </div>

        <div className="social-media" aria-label="Social media links">
          {socialLinks.map(({ href, icon, label }) => (
            <a key={href} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              {icon}
            </a>
          ))}
        </div>

        <hr className="divider" />

        <section className="footer-disclaimer">
          <h3>Important Disclaimer</h3>
          <ul>
            {disclaimerItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
            <li>
              For verified and official announcements, please refer to the
              Department or University Notice Boards, or visit{" "}
              <a
                className="mail"
                href="https://www.geu.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.geu.ac.in
              </a>
              .
            </li>
          </ul>
        </section>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} GEU Supercomputing Facility. All rights reserved.</p>
          <p className="developer-credit">
            Designed & Developed by <span>Param Lab @GEU</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
