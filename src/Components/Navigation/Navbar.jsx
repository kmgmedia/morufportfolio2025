import React from "react";
import { Outlet } from "react-router-dom";
import "./navbar.scss";
import Logo from "../../assets/Kmg.png";
import { FaDownload } from "react-icons/fa";
import resume from "../../assets/resume.pdf";

const Navbar = () => {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="b-g-all">
          <nav className="navbar nav-row">
            <div className="navbar-flex">
              <a className="navbar-brand" href="#">
                <img src={Logo} alt="Kmg Logo" />
              </a>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-item-2"
              >
                {/* <FaDownload style={{ marginRight: "8px" }} /> */}
                UI/UX Resume
              </a>
            </div>
          </nav>
        </div>
      </div>
      {/* Spacer to prevent content overlap */}
      <div className="navbar-spacer"></div>
      <Outlet />
    </>
  );
};

export default Navbar;
