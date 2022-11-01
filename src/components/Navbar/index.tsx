import { NavLink } from "react-router-dom";
import "./styles.css";
import "bootstrap/js/src/collapse.js";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm main-navbar-container">
      <div className="container-fluid content-navbar-container">
        <div className="logo-navbar-container">
          <a href="link">
            <h1>Top-Cars</h1>
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynav"
          aria-controls="mynav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse menu-navbar-container"
          id="mynav"
        >
          <ul className="navbar-nav offset-md-2 list-menu">
            <li>
              <NavLink to="/">
                <h2>Home</h2>
              </NavLink>
            </li>
            <li>
              <NavLink to="catalogo">
                <h2>Catálogo</h2>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
