import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./HamburgerMenu.css";

const navLinks = [
  { to: "/job-submission", label: "Job Submission" },
  { to: "/best-practices", label: "Best Practices" },
  { to: "/admin-notes", label: "Admin Notes" },
  { to: "/manual-access", label: "Access Manual" },
];

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const closeOnClickAway = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    if (menuOpen) {
      document.addEventListener("click", closeOnClickAway);
      document.addEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("click", closeOnClickAway);
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("click", closeOnClickAway);
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={(event) => {
          event.stopPropagation();
          toggleMenu();
        }}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="side-menu"
      >
        <span />
        <span />
        <span />
      </button>

      <Link to="/request-service" className="request-btn">
        Access Request
      </Link>

      <div className={`menu-overlay ${menuOpen ? "visible" : ""}`} />

      <aside
        id="side-menu"
        ref={menuRef}
        className={`side-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="menu-heading">
          
          <h3 className="ops">Operations menu</h3>
        </div>
        <nav>
          <ul className="menu-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="menu-link" onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default HamburgerMenu;
