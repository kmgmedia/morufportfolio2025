import React from 'react'
import './footer.scss';
import { FaLinkedin, FaBehance, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
      <>
        <div className="row footers">
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
          <div class="col-sm-12 col-md-12 col-lg-10">
            <div className="row footer-bold-text">
              <div class="col-sm-12 col-md-12 col-lg-5">
                <span className="line2"></span>
                <h3>MORUF ADEBOLA</h3>
                <p>
                  A product designer with years of experience, currently shaping
                  in coding the future, building digital worlds products within
                  energetic and dynamic cross-functional settings.
                </p>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-1"></div>

              <div class="col-sm-12 col-md-12 col-lg-3">
                <h5>Contact</h5>
                <p>+27 64 205 7309</p>
                <p>morufbadebola@gmail.com</p>
                <p>hellokmgmedia@gmail.com</p>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-1"></div>

              <div className="col-sm-12 col-md-12 col-lg-2">
                <div>
                  <h5>Social</h5>
                  <div className="all-social-icons">
                    <p>
                      <a
                        href="https://www.linkedin.com/in/moruf-adebola"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bbtn1"
                      >
                        <FaLinkedin size={25} /> LinkedIn
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.behance.net/6301cmorufadebolakmg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bbtn1"
                      >
                        <FaBehance size={25} /> Behance
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://x.com/NFT_KingM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bbtn1"
                      >
                        <FaTwitter size={25} /> Twitter
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <p>Copyright© 2025 Moruf Adebola, All Rights reserved.</p>
              <div class="col-sm-12 col-md-12 col-lg-1"></div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </>
    );
    }

export default Footer
