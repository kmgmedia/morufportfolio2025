import React from "react";
import "./kmgfoliobigpage.scss";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Cloudinary } from "@cloudinary/url-gen";
import Projectcards from "../Projectcards/Projectcards";
import Footer from "../Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Kmgfoliobigpage = () => {

  const navigate = useNavigate();

  // useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);



  return (
    <>
      <div className="row project-1">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              {/* Animation AOS */}
              <div
                data-aos="zoom-in"
                data-aos-duration="1800"
                className="mackmg-img"
              >
                <div className="">
                  <img
                    className="heros-image1"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751226534/Moruf%20Adebola%20Portfolio%202025/Kmgfoliobigpage/Macpckmgfoliobig_akfmm6.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751226533/Moruf%20Adebola%20Portfolio%202025/Kmgfoliobigpage/kmgt65_gxabev.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
      </div>

      <div className="row project-1">
        <div class="col-sm-12 col-md-12 col-lg-3"></div>
        <div class="col-sm-12 col-md-12 col-lg-9">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-7">
              <div
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <Projectcards
                  title="Kmgfolio stands as a testament to my creative drive and
                        technical prowess."
                  body="Kmgfolio is a sleek and modern portfolio platform I built to showcase creative work in a clean, structured, and engaging way. Designed with performance and simplicity in mind, the goal was to create a smooth experience for both creators and viewers.
                      For this project, I led the end-to-end product design process—from planning layout structure and wireframing to crafting UI/UX interactions and building a responsive design system. The focus was on usability, visual clarity, and speed, making it easy to present projects professionally and attractively.
                      The result is a fast, user-friendly portfolio experience that helps creatives make a strong impression and connect with opportunities more effectively."
                />
              </div>
              <div className="contaa1">
                <div className="gobck">
                  <button className="go-back-btn">Live Link</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-3"></div>
      </div>

      <div className="row project-1 pt-5">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-6">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-2">
              <div className="aboutmecont-5">
                <h4>My Role</h4>
                <div className="kmg-folio-text-23 pt-3">
                  <p>- UI/UX Design</p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-2">
              <div className="aboutmecont-5">
                <h4>Tools</h4>

                <div className="kmg-folio-text-23 pt-3">
                  <p>- Figma</p>
                  <p>- Figjam</p>
                  
                </div>
              </div>
            </div>

            <div class="col-sm-12 col-md-12 col-lg-2">
              <div className="aboutmecont-5 pt-2">
                <h4>Timeline</h4>
                <div className="kmg-folio-text-23 pt-3">
                  <p>- 3 Months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
      </div>

      <div className="row project-1">
        <div class="col-sm-12 col-md-12 col-lg-3"></div>
        <div class="col-sm-12 col-md-12 col-lg-9">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-7">
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="Project Overview"
                  body={
                    <div>
                      <p>
                        Kmgfolio stands as a testament to my creative drive and
                        technical prowess. This project is the culmination of my
                        efforts to design and develop a versatile, visually
                        appealing, and high-performance multi-stage portfolio.
                      </p>

                      <p>
                        It reflects my dedication to creating a tool that not
                        only showcases my work effectively but also offers an
                        excellent user experience.
                      </p>

                      <p>
                        The primary objective behind Kmgfolio was to develop a
                        platform that allows for the rapid creation of
                        professional portfolios. Recognizing the need for a
                        portfolio solution that is both aesthetically pleasing
                        and functionally robust, I embarked on this project to
                        address these requirements efficiently.
                      </p>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-3"></div>
      </div>

      <div className="row project-1">
        <div class="col-sm-12 col-md-12 col-lg-3"></div>
        <div class="col-sm-12 col-md-12 col-lg-9">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-7">
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="Some Final Designs"
                  body={
                    <div>
                      <p>
                        The primary objective behind Kmgfolio was to develop a
                        platform that enables the rapid creation of professional
                        portfolios. Recognizing the need for a solution that is
                        both aesthetically pleasing and functionally robust, I
                        embarked on this project to efficiently address these
                        requirements.
                      </p>

                      <p>
                        Through Kmgfolio, I had the opportunity to enhance my
                        skills in web development, particularly with React.js,
                        and to significantly advance my UI design capabilities.
                        This project not only allowed me to showcase my
                        technical skills but also to create designs that are
                        simple, beautiful, and highly functional.
                      </p>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-3"></div>
      </div>

      <div className="row project-12">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="zoom-out-up"
                data-aos-duration="6000"
                className="mackmg-img-2"
              >
                <div className="pt-5">
                  <img
                    className="heros-image3"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751226534/Moruf%20Adebola%20Portfolio%202025/Kmgfoliobigpage/Macpckmgfoliobig1_iom3zl.png"
                    alt=""
                  />
                  <img
                    className="heros-image4"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751226533/Moruf%20Adebola%20Portfolio%202025/Kmgfoliobigpage/kmgt372_jjojoa.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
      </div>

      <div className="row project-12">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="zoom-out-up"
                data-aos-duration="2000"
                className="mackmg-img-2"
              >
                <div className="">
                  <img
                    className="heros-image3"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751226571/Moruf%20Adebola%20Portfolio%202025/Kmgfoliobigpage/Macpckmgfoliobig2_gcqoak.png"
                    alt=""
                  />
                  <img
                    className="heros-image4"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751226570/Moruf%20Adebola%20Portfolio%202025/Kmgfoliobigpage/kmgt65403_c46lzp.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
      </div>

      <div className="row project-1">
        <div class="col-sm-12 col-md-12 col-lg-3"></div>
        <div class="col-sm-12 col-md-12 col-lg-9">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-7">
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="Key Insights"
                  body={
                    <ol>
                      <li>
                        Identified Target Audience: Clearly defined the
                        demographic and professional characteristics of the
                        audience most likely to engage with the portfolio.
                      </li>
                      <br />
                      <li>
                        Highlighted Competitive Advantages: Identified unique
                        strengths and attributes that set my portfolio apart
                        from competitors in the field.
                      </li>
                    </ol>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-3"></div>
      </div>

      <div className="row project-1">
        <div class="col-sm-12 col-md-12 col-lg-3"></div>
        <div class="col-sm-12 col-md-12 col-lg-9">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-7">
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="Competitive Analysis"
                  body={
                    <ul>
                      <li>
                        <strong>
                          Highlight My Unique Style and Expertise:
                        </strong>{" "}
                        I showcase my distinctive design aesthetic or technical
                        skills that make my portfolio stand out. I emphasize how
                        my creative approach or specialized knowledge sets me
                        apart from other designers in my industry.
                      </li>
                      <li>
                        <strong>
                          Compare My Portfolio Presentation and Impact:
                        </strong>{" "}
                        I evaluate how my portfolio compares to competitors in
                        terms of visual presentation, user experience, and the
                        overall impression it leaves. I identify areas where I
                        excel and where I can further enhance the presentation
                        to make a lasting impact on stakeholders.
                      </li>
                    </ul>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-3"></div>
      </div>

      <div className="row project-12">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="zoom-out-up"
                data-aos-duration="2000"
                className="mackmg-img-2"
              >
                <div className="pt-5">
                  <img
                    className="heros-image3"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751226534/Moruf%20Adebola%20Portfolio%202025/Kmgfoliobigpage/kmgmeg_yx87nn.png"
                    alt=""
                  />
                  <img
                    className="heros-image4"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751226531/Moruf%20Adebola%20Portfolio%202025/Kmgfoliobigpage/kmgt65162_trbuwm.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
      </div>

      <div className="row project-12">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="zoom-out-up"
                data-aos-duration="6000"
                className="mackmg-img-2"
              >
                <div className="pt-5">
                  <img
                    className="heros-image3"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751226572/Moruf%20Adebola%20Portfolio%202025/Kmgfoliobigpage/kmgimg2_inbcvj.png"
                    alt=""
                  />
                  <img
                    className="heros-image4"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751226534/Moruf%20Adebola%20Portfolio%202025/Kmgfoliobigpage/kmgt65121_gkmdtq.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
      </div>

      <div className="row project-1">
        <div class="col-sm-12 col-md-12 col-lg-3"></div>
        <div class="col-sm-12 col-md-12 col-lg-9">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-7">
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="Key Lessons Learned"
                  body={
                    <ul>
                      <li>
                        <strong>Value of In-Depth Research:</strong> Working on
                        this project reinforced the importance of thorough
                        research. I realized how crucial it is for making
                        informed decisions that align with the project’s
                        objectives and the solutions it aims to provide.
                      </li>
                      <li>
                        <strong>Importance of a Structured Process:</strong> To
                        achieve a bespoke design, having a well-defined process
                        is fundamental. Implementing a structured workflow not
                        only helped me work more efficiently and systematically
                        but also allowed me to complete the project well ahead
                        of the scheduled.
                      </li>
                    </ul>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-3"></div>
      </div>

      <div className="row project-1">
        <div class="col-sm-12 col-md-12 col-lg-3"></div>
        <div class="col-sm-12 col-md-12 col-lg-9">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-7">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="What I Would Have Done Differently"
                  body="If I had the chance to revisit this project, I would have pushed the
                  boundaries of my visual implementation even further. While the current interface
                  is excellent, I believe that with deeper consideration of the overall visual style,
                  I could have created an even sleeker and more polished design."
                />
              </div>
              <div className="contaa">
                <div className="gobck">
                  <HashLink smooth to="/#projects" className="go-back-btn">
                    Go Back
                  </HashLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-3"></div>
      </div>

      <Footer />
    </>
  );
};

export default Kmgfoliobigpage;
