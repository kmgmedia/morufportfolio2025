    import React from "react";
    import "./project.scss";
    import { Outlet, Link } from "react-router-dom";
    import {
    uiuxdesign,
    Webdesign,
    Brandidentity,
    Powerpoint,
    Graphicdesign,
    Teacherpointingfinger,
    bag,
    } from "../../assets";
    import { Cloudinary } from "@cloudinary/url-gen";
    import Button from "../Button/Button";
    import Card from "../Card/Card";
    import resume from "../../assets/resume.pdf";
    import { FaArrowRight } from "react-icons/fa";
    import AOS from "aos";
    import "aos/dist/aos.css";

    import { useEffect } from "react";


    const Project = () => {

      // useEffect
      useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
      
    return (
      <>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="row project-1 pb-5"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>

        
        <div className="row project-1">
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
          <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div className="aboutmecont">
                  <h4>CASE STUDIES</h4>
                  <span className="line"></span>
                  <div className="kmg-folio-text-1 pt-4">
                    <h3>Product Design Case Studies</h3>
                  </div>
                  <div className="kmg-folio-text-23">
                    <p>
                      Diverse works, personal & client projects showcased. Dive
                      into detailed <br /> case studies revealing creative
                      processes, challenges, & solutions for each.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>

        {/* PROJECT SESSION  */}

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="row project-1"
        >
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
          <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div className="kmg-folio-img">
                  <img
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751227703/Moruf%20Adebola%20Portfolio%202025/Project/Macpckmgfolio_lkbiyv.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div className="kmg-folio-text-1">
                  <h5>Kmgfolio</h5>
                  <div className="skills">
                    <p className="skills-btn">UI/UX</p>
                    <p className="skills-btn">Info Architechture</p>
                    <p className="skills-btn"> User Flow</p>
                  </div>
                </div>
                <div className="kmg-folio-text-2">
                  <p>
                    Kmgfolio was born from my creative drive, a fast, visually
                    appealing multi-stage portfolio project. Feel free to
                    explore it via the link below.
                  </p>
                </div>
                <div className="conta">
                  <Button link="/Kmgfoliobigpage" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1600"
          className="row project-1"
        >
          <div className="col-sm-12 col-md-12 col-lg-1"></div>

          <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="kmg-folio-img">
                  <img
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751227813/Moruf%20Adebola%20Portfolio%202025/Project/Phonepethome_vsdiy2.png"
                    alt="Pet Home Project"
                  />
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="kmg-folio-text-1">
                  <h5>PetHome</h5>
                  <div className="skills">
                    <p className="skills-btn">UI/UX</p>
                    <p className="skills-btn">Info Architechture</p>
                    <p className="skills-btn"> User Flow</p>
                    <p className="skills-btn"> User Interviews</p>
                  </div>
                </div>

                <div className="kmg-folio-text-2">
                  <p>
                    I helped improve the Pet Home App by adding features that
                    boosted conversion rates and enhanced the user experience.
                  </p>
                </div>

                <div className="conta">
                  <Button link="/Pethomefolio" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1700"
          className="row project-1"
        >
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
          <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div className="kmg-folio-img">
                  <img
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751227893/Moruf%20Adebola%20Portfolio%202025/Project/mackbooksicklecell_lhi8zm.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div className="kmg-folio-text-1">
                  <h5>Sickle Cell Foundation Nigeria</h5>
                  <div className="skills">
                    <p className="skills-btn">UI/UX</p>
                    <p className="skills-btn">Info Architechture</p>
                    <p className="skills-btn"> User Flow</p>
                  </div>
                </div>
                <div className="kmg-folio-text-2">
                  <p>
                    I worked with a team to design an easy-to-use UI for the
                    Sickle Cell Foundation Nigeria web app.
                  </p>
                </div>
                <div className="conta">
                  <Button link="/Sicklefolio" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1800"
          className="row project-1"
        >
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
          <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div className="kmg-folio-img">
                  <img
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751227980/Moruf%20Adebola%20Portfolio%202025/Project/Phonesmarthom_kkssr0.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div className="kmg-folio-text-1">
                  <h5>Smart Home Real Estate</h5>
                  <div className="skills">
                    <p className="skills-btn">UI/UX</p>
                    <p className="skills-btn"> User Interviews</p>
                    <p className="skills-btn">Info Architechture</p>
                    <p className="skills-btn"> User Flow</p>
                  </div>
                </div>
                <div className="kmg-folio-text-2">
                  <p>
                    I enhanced the Smart Home App with features that improved
                    user experience and significantly boosted conversion rates
                    for Smart Home Real Estate.
                  </p>
                </div>
                <div className="conta">
                  <Button link="/Smarthomefolio" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1900"
          className="row project-1"
        >
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
          <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div className="kmg-folio-img">
                  <img
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751228077/Moruf%20Adebola%20Portfolio%202025/Project/Jomtjournal_rd75f4.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div className="kmg-folio-text-1">
                  <h5>JOMT Journal</h5>
                  <div className="skills">
                    <p className="skills-btn">UI/UX</p>
                    <p className="skills-btn">Info Architechture</p>
                    <p className="skills-btn"> User Flow</p>
                  </div>
                </div>
                <div className="kmg-folio-text-2">
                  <p>
                    I designed a clean, user-friendly UI for the JOMT web app,
                    making it easy to explore articles and authors while keeping
                    a modern, professional look.
                  </p>
                </div>
                <div className="conta">
                  <Button link="/Jomtjournal" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="row project-1"
        >
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
          <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div className="kmg-folio-img">
                  <img
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751228275/Moruf%20Adebola%20Portfolio%202025/Project/macsidonpay_j1you6.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div className="kmg-folio-text-1">
                  <h5>SidonPay (by BoundlessPay)</h5>
                  <div className="skills">
                    <p className="skills-btn">UI/UX</p>
                    <p className="skills-btn">Info Architechture</p>
                    <p className="skills-btn"> User Flow</p>
                    <p className="skills-btn"> User Interviews</p>
                  </div>
                </div>
                <div className="kmg-folio-text-2">
                  <p>
                    SidonPay is a result of my creative vision—a sleek,
                    multi-step portfolio project designed for speed and visual
                    impact.
                  </p>
                </div>
                <div className="conta">
                  <Button />
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1800"
          className="row project-1"
        >
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
          <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div className="aboutmecont">
                  <h4>DESIGN-STACK</h4>
                  <span className="line"></span>
                  <div className="kmg-folio-text-1 pt-4">
                    <h3>My preferred design stack</h3>
                  </div>
                  <div className="kmg-folio-text-23">
                    <p>
                      These are my go-to tools for designing clean,
                      user-friendly, and functional interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>

        <div className="row project-1 pt-4">
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
          <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-2">
                <div className="aboutmecont-5">
                  <h4>Research</h4>
                  <div className="kmg-folio-text-23">
                    <p>- Figjam</p>
                    <p>- Miro</p>
                    <p>- Notion</p>
                    <p>- Maze</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-2">
                <div className="aboutmecont-5">
                  <h4>Visual Design</h4>

                  <div className="kmg-folio-text-23">
                    <p>- Figjam</p>
                    <p>- Figsite</p>
                    <p>- Miro</p>
                    <p>- Adobe Creative Suite</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-12 col-lg-2">
                <div className="aboutmecont-5">
                  <h4>Communication</h4>
                  <div className="kmg-folio-text-23">
                    <p>- Notion</p>
                    <p>- ClickUp</p>
                    <p>- Slack</p>
                    <p>- Jira</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>

        <div>
          <div className="hiremm-1 pt-3 pb-1">
            <h5 className="hiremm">Hire Me For Your Next Project</h5>
          </div>
        </div>

        <div className="row project pb-5">
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
          <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-10">
                <div className="aboutmecont pt-5">
                  <h4>MY SERVICE</h4>
                  <span className="line"></span>
                  <div className="kmg-folio-text-1 pt-4">
                    <h3>Expertise</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>

        <div className="row pb-5">
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
          <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12">
                <div className="carda1">
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1800"
                    className="cardall"
                  >
                    <Card
                      image={uiuxdesign}
                      title="UI/UX Design"
                      body="Crafting User-centric websites that tell your story and connect
                            with your audience effectively."
                    />
                    <div className="cardall">
                      <Card
                        image={Webdesign}
                        title="Storyboarding"
                        body=" Mapping user journeys to create smooth, engaging web experiences."
                      />
                      <div className="cardall">
                        <Card
                          image={Brandidentity}
                          title=" Branding & Designing"
                          body="Brand identity design turns a plain business presence into a memorable experience."
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1800"
                    className="cardall"
                  >
                    <Card
                      image={Powerpoint}
                      title="Analytical Thinking"
                      body="I break down complex problems to craft smart, user-focused design strategies that make brands stand out."
                    />
                    <div className="cardall">
                      <Card
                        image={Graphicdesign}
                        title="Visual Communication"
                        body="I design clear, impactful visuals that communicate ideas instantly and make brands stand out."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>

        <div className="row">
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
          <div class="col-sm-12 col-md-12 col-lg-6">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-10">
                <div className="aboutmecont">
                  <div className="check-body">
                    <h3>
                      Check out my
                      <span>
                        resume! Let get to work.
                        <img src={Teacherpointingfinger} alt="" />
                        <img src={bag} alt="" />
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>

          <div className="col-sm-12 col-md-12 col-lg-2">
            <div className="aboutmecont">
              <div
                data-aos="zoom-in"
                data-aos-duration="1800"
                className="check-btn d-flex justify-content-center"
              >
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bottom-btn"
                >
                  <span>View Resume</span>
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </>
    );
    };

    export default Project;
