import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./hero.scss";
import Button from "../Button/Button";
import { Backgroundpattern, Heylogo } from "../../assets";
import {
  FaLinkedin,
  FaBehance,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Cloudinary } from "@cloudinary/url-gen";
// import { ArrowTop, FaceIcon } from '@radix-ui/react-icons';

const Hero = () => {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${Backgroundpattern})` }}
    >
      <div className="">
        <div className="row top">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-6 col-md-4">
                <div className="hey">
                  <img src={Heylogo} alt="" />
                </div>
                <div className="hero-text">
                  <h1>Bringing Your Vision to Life Through Design</h1>
                </div>

                <div className="hero-p">
                  <p>
                    Helping Your Brand Build Seamless & Engaging <br />
                    Digital Products.
                    <br />
                  </p>
                </div>
                <div className="st-btn">
                  <HashLink smooth to="/#projects" className="portfolio">
                    UI/UX Portfolio <i></i>
                  </HashLink>
                  <button className="hireme">Dev Portfolio</button>
                </div>
              </div>
              <div className="col-lg-5 col-md-5">
                <div className="hero-img1">
                  <img
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751230229/Moruf%20Adebola%20Portfolio%202025/Project/Heroimage_kkpag0.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="section-center">
              <div className="section-path">
                <div className="globe">
                  <div className="wrapper">
                    <span></span>
                    <span></span>
                    ...
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
        <div className="row all-this-site">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-7">
                <div className="hero-image-text">
                  <p>
                    This site is{" "}
                    <span className="boldpart-1">Part portfolio,</span>{" "}
                    <span className="boldpart-2">Part hand crafted works,</span>{" "}
                    Full work in progress. <br />
                    To learn more about current projects and get InTouch, hit
                    the link below.
                  </p>
                  <div className="icons-all">
                    <a
                      className="social-icon"
                      href="https://www.linkedin.com/in/moruf-adebola"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      className="social-icon"
                      href="https://www.behance.net/6301cmorufadebolakmg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaBehance />
                    </a>
                    <a
                      className="social-icon"
                      href="https://www.instagram.com/kmg_media_/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      className="social-icon"
                      href="https://x.com/NFT_KingM"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5"></div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="row project-1"
        >
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
          <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-10">
                <div className="aboutmecont">
                  <h4>MY STORY</h4>
                  <span className="line"></span>
                  <div className="kmg-folio-text-1 pt-4">
                    <h3>My Path into Product Design</h3>
                  </div>
                  <div className="kmg-folio-text-23">
                    <p>
                      <p>
                        My journey into product design started with a passion
                        for creating things that are both functional and
                        visually appealing. I was drawn to how design solves
                        real problems and improves user experience. As I
                        explored UI/UX tools and user behavior, I developed the
                        ability to create clean, intuitive interfaces.
                      </p>

                      <p>
                        As a Product Designer, I’m driven by innovation and
                        enjoy building meaningful digital experiences. I’ve
                        worked with private organizations to deliver tailored,
                        impactful solutions.
                      </p>

                      <p>
                        I’m always eager to learn and explore new creative areas
                        like NFTs and animation to expand my design skills.
                        Outside work, I love discovering new places and staying
                        inspired. I’m open to opportunities where I can
                        contribute, grow, and make a difference.
                      </p>
                      <span className="skills-bold">
                        If my skills align with what you’re looking for, feel
                        free to reach out, I’d love to connect!
                      </span>
                    </p>

                    {/* BUTTON FROM BUTTON COMPONENT (AS REUSEABLE COMPONENT) */}

                    <Button link="/contact" label={<div>Contact</div>} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
