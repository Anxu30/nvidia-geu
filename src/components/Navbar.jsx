import { NavLink } from "react-router-dom";
import "./Navbar.css";
import HamburgerMenu from "./HamburgerMenu";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Infrastructure", link: "/infrastructure" },
  { name: "Publications", link: "/publications" },
  { name: "Software & Resources", link: "/software-resources" } // updated
];

const marqueeCopy =
  "Welcome to the Centre of Artificial Intelligence and High-Performance Computing @ Graphic Era (Deemed to be University)";

const Navbar = () => {
  return (
    <>
    
      <header className="navbar">
        
        <div className="navbar-inner">
          <div className="brand-cluster">
            <div className="logo-stack">
              <img className="logo logo-geu" src="/GL.svg" alt="Graphic Era University" />
              <img className="logo logo-nvidia" src="/NL.jpg" alt="NVIDIA" />
              
            </div>
          </div>

          <nav className="nav-links" aria-label="Primary navigation">
            <ul>
              {menuItems.map((item) => (
                <li key={item.link}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "nav-link-active" : ""}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="navbar-glow" aria-hidden="true" />

      </header>

      <div className="ticker">
        <div className="ticker-track">
          <span>{marqueeCopy}</span>
          <span aria-hidden="true">{marqueeCopy}</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
