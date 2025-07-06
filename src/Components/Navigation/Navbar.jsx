import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.scss";
import Logo from "../../assets/Kmg.png";
import { FaDownload } from "react-icons/fa";
import resume from "../../assets/resume.pdf";

const Navbar = () => {
  return (
    <>
      <div className="b-g-all fixed-top">
        <nav className="navbar navbar-expand-lg nav-row">
          <div className="container-fluid navbar-flex">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="" />
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item-2"
            >
              View Resume
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;



// import React from "react";
// import { useState } from "react";
// import { Outlet, Link } from "react-router-dom";
// import "./navbar.scss";
// import Logo from "../../assets/Kmg.png";
// import { FaDownload, FaFileDownload, FaTimes } from "react-icons/fa";
// import resume from "../../assets/resume.pdf";

// const Navbar = () => {
// return (
//     <>
//     <div className="b-g-all fixed-top">
//         <nav className="navbar navbar-expand-lg nav-row">
//         <div className="container-fluid navbar-flex">
//             <a className="navbar-brand" href="#">
//             <img src={Logo} alt="" />
//             </a>
//             <a
//             href={resume}
//             download="Moruf-Adebola-Resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="nav-item-2"
//             >
//             <FaDownload style={{ marginRight: "10px" }} />
//             View Resume
//             </a>
//         </div>
//         </nav>
//         {/* Hero section here (make sure it's on the same line or directly after, depending on layout) */}
//     </div>
//     </>
// );
// };

// export default Navbar;
