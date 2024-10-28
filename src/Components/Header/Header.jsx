import { useState } from "react";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logoo from "./Assets/Tuniilogo.svg";

const Header = () => {
  const [isResponsive, setResponsive] = useState(false);
  const toggleResponsive = () => {
    setResponsive(!isResponsive);
  };

  return (
    <>
      <div className="container-fluid shadow-container fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg backgroundapply_header">
            {/* Logo */}
            <a className="navbar-brand LOGO_SIZE_ADJUST" href="/">
              <img src={logoo} className="img-fluid" alt="Logo" />
            </a>

            {/* Toggler button */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleResponsive}
              id="toggle_button"
            >
              {isResponsive ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`collapse navbar-collapse ${isResponsive ? "show" : ""}`}>
              {/* Centered Search Bar */}
              <div className="ms-auto">
                <form className="d-flex">
                  <input
                    type="search"
                    className="form-control me-2 btn-outline-primary"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-primary" type="submit">
                    Search
                  </button>
                </form>
                
              </div>
              <ul className="navbar-nav">
                <li className="nav-item nav_items">
                  <a className="nav-link " aria-current="page" href="https://tunii.store/" target="_black">
                    <span className="hover_under_line">Shopping</span>
                  </a>
                </li>
                <li className="nav-item nav_items">
                  <a className="nav-link " aria-current="page" href="/Seller">
                    <span className="hover_under_line">Seller</span>
                  </a>
                </li>
                <li className="nav-item nav_items">
                  <a className="nav-link " aria-current="page" href="/Blogs">
                    <span className="hover_under_line">Help</span>
                  </a>
                </li>
                <li className="nav-item nav_items">
                  <a className="nav-link " aria-current="page" href="/Blogs">
                    <span className="hover_under_line">Sign In</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
