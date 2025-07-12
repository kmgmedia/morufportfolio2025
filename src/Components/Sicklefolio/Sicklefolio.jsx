import React from "react";
import "./sicklefolio.scss";
import { HashLink } from "react-router-hash-link";
import { Cloudinary } from "@cloudinary/url-gen";
import Projectcards from "../Projectcards/Projectcards";
import Footer from "../Footer/Footer";


import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";


// All this page styling is been done from PROJECTCARDS Folder
// ANY CORRECTIONS ARE TO BE MADE FROM THERE AND ITS WILL CHANGE
// ALL OTHER WEB PAGE DESIGNS TOO. BE CAREFUL.

const Sicklefolio = () => {

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
              <div
                data-aos="zoom-in"
                data-aos-duration="1800"
                className="mackmg-img"
              >
                <div className="pt-5">
                  <img
                    className="heros-image1"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751218295/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/sickleimg_qjzme2.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751221718/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/sickleimg1_s5ovjo.png"
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
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              class="col-sm-12 col-md-12 col-lg-7"
            >
              <div className="kmg-folio-text-1">
                <Projectcards
                  title="Improving Access to Comprehensive Sickle Cell Care"
                  body="The goal is to ensure that sickle cell patients receive
                            comprehensive and accessible care, empowering them to effectively
                            manage their condition and improve their overall health and well-being.
                            Central to this goal is the establishment of specialized clinics or units
                            within hospitals that are dedicated to sickle cell care. These clinics
                            serve as focal points where patients can receive specialized medical
                            attention from healthcare professionals with expertise in managing
                            the complexities of the disease. By consolidating resources and
                            expertise in one location, these clinics ensure that patients
                            receive comprehensive care tailored to their specific needs."
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
      {/* // All this MY ROLE SESSION is been done from Kmgfoliobigpage Folder
                                            // ANY CORRECTIONS ARE TO BE MADE FROM THERE AND ITS WILL CHANGE
                                            // ALL OTHER WEB PAGE DESIGNS TOO. BE CAREFUL. */}
      <div className="row project ">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-6">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-2">
              <div className="aboutmecont-5">
                <h4>My Role</h4>
                <div className="kmg-folio-text-23 pt-3">
                  <p>- UI/UX Design</p>
                  <p>- User Research</p>
                  <p>- Brand Design</p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-2">
              <div className="aboutmecont-5 pt-2">
                <h4>Tools</h4>
                <div className="kmg-folio-text-23 pt-3">
                  <p>- Figma</p>
                  <p>- Figjam</p>
                  <p>- Miro</p>
                  <p>- Notion</p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-2">
              <div className="aboutmecont-5 pt-2">
                <h4>Timeline</h4>
                <div className="kmg-folio-text-23 pt-3">
                  <p>- 4 Months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
      </div>

      {/* // All this page styling is been done from PROJECTCARDS Folder //
                                    ANY CORRECTIONS ARE TO BE MADE FROM THERE AND ITS WILL CHANGE // ALL
                                    OTHER WEB PAGE DESIGNS TOO. BE CAREFUL. */}

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
                  title="Project Overview"
                  body={
                    <div>
                      <p>
                        Developing a website for booking Sickle Cell Hospital
                        appointments addresses patients' concerns about lengthy
                        wait times and missed appointments. The platform offers
                        a user-friendly interface for scheduling appointments,
                        minimizing wait times, and ensuring punctual
                        consultations. Real-time updates contribute to a
                        decrease in missed care.
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

      <div className="row project">
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
                        This idea originated from the real-life experiences of
                        Sickle Cell patients who often require immediate
                        attention. You can effortlessly schedule prompt
                        appointments with our available doctors. Additionally,
                        you have the convenience of donating blood, medicine, or
                        funds to support Sickle Cell patients in need of
                        hospital assistance, all from the comfort of your home.
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

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-3"></div>
        <div class="col-sm-12 col-md-12 col-lg-9">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-7">
              <div
                data-aos="fade-up"
                data-aos-duration="5000"
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="Design Thinking Process"
                  body={
                    <div>
                      <p>
                        An iterative design approach that includes research,
                        prototyping, and user testing to enhance the user
                        interface and experience, ensuring optimal usability and
                        engagement.
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

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="fade-left"
                data-aos-duration="5000"
                className="mackmg-img"
              >
                <div className="pt-5">
                  <img
                    className="heros-image1"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751231901/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/sickleimg2_jxi1t3.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751232377/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/sickleimg22_fnzprs.png"
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
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              class="col-sm-12 col-md-12 col-lg-7"
            >
              <div className="kmg-folio-text-1">
                <Projectcards
                  body={
                    <div>
                      <p>
                        The logo <strong>"Sickle Cell Hospital"</strong>{" "}
                        features a dynamic, symbolizing vitality and strength.
                        The bold typography reflects the hospital’s confidence
                        and modernity, while the subtle imagery suggests a blend
                        of advanced treatments and compassionate care, inviting
                        patients to experience exceptional healthcare.
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

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="fade-in"
                data-aos-duration="3000"
                className="mackmg-img"
              >
                <div className="pt-5">
                  <img
                    className="heros-image1"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751231898/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/sickleimg3_uqstwi.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751233028/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/sickleimg33_dhavua.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
      </div>

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="fade-left"
                data-aos-duration="5000"
                className="mackmg-img"
              >
                <div className="pt-5">
                  <img
                    className="heros-image1"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751231898/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/sickleimg4_pp6lls.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751232589/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/sickleimg44_ufghyu.png"
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
                data-aos="fade-up"
                data-aos-duration="3000"
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="Challenge"
                  body={
                    <div>
                      <p>
                        Seeking appropriate medical care for sickle cell
                        patients can be a daunting and overwhelming process,
                        particularly for those unfamiliar with navigating the
                        complexities of managing their condition. Patients often
                        encounter challenges in finding healthcare facilities or
                        hospitals that can provide specialized care tailored to
                        their specific medical needs and requirements. This can
                        lead to delays in accessing essential medical treatment
                        and may result in inadequate management of sickle
                        cell-related complications.
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

      <div className="row project">
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
                  title="Solution"
                  body={
                    <div>
                      <p>
                        To better support sickle cell patients, hospitals should
                        establish specialized clinics, improve care
                        coordination, offer patient education, provide
                        telemedicine services, and engage in community outreach.
                        These proactive measures aim to enhance access to
                        comprehensive care, empower patients, and improve health
                        outcomes.
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

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="mackmg-img"
              >
                <div className="pt-5">
                  <img
                    className="heros-image1"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751234878/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/Frame_1618873169_xpodwm.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751235036/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/Frame_1984077379_ujmcbt.png"
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
                data-aos="fade-up"
                data-aos-duration="3000"
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="Key Features"
                  body={
                    <div>
                      <p>
                        <strong>Real-time Notifications and Alerts:</strong>
                      </p>
                      <p>
                        Real-time alerts for patients when their test results
                        are available, allowing them to access their medical
                        records promptly and stay informed about their health
                        status. Timely reminders for patients to refill their
                        prescriptions, ensuring continuity of care and
                        medication adherence.
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

      <div className="row project">
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
                  body={
                    <div>
                      <p>
                        <strong>
                          Comprehensive Hospital Descriptions with Multimedia
                          Components:
                        </strong>
                      </p>
                      <p>
                        Create multimedia presentations or slideshows showcasing
                        hospital amenities, services, and special features.
                        Include audio narration or text captions to provide
                        context and enhance the user experience. Ensure that
                        multimedia components are optimized for mobile devices,
                        allowing users to access and view content seamlessly on
                        smartphones and tablets.
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

      <div className="row project">
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
                  body={
                    <div>
                      <p>
                        <strong>
                          Effortless attention between doctors and patient
                          System:
                        </strong>
                      </p>
                      <p>
                        Implement a secure patient portal where patients can
                        access their medical records, lab results, and treatment
                        plans online. Allow patients to communicate with their
                        doctors, ask questions, and request prescription refills
                        through the portal.
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
                  title="User Reviews and Ratings:"
                  body={
                    <div>
                      <p>
                        Provide sorting and filtering options that allow users
                        to view reviews based on different criteria, such as
                        date, rating, or specific aspects of the hospital
                        experience. This helps users find relevant and helpful
                        reviews more easily.
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

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="5000"
                data-aos-duration="1000"
                className="mackmg-img7"
              >
                <div className="pt-5">
                  <img
                    className="heros-image1"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751240442/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/Frame_1984077372_sucebr.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751240440/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/Frame_198407737921_bfwnvz.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
      </div>

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                className="mackmg-img"
              >
                <div className="pt-5">
                  <img
                    className="heros-image1"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751240680/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/Frame_1984077383_v7phwv.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751240856/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/Frame_1984077384_zccawx.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
      </div>

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div className="mackmg-img">
                <div className="pt-5">
                  <img
                    className="heros-image1"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751240925/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/Frame_1618873098_c1k7is.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751240992/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/Frame_1984077379_la6x66.png"
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
              <div className="kmg-folio-text-1">
                <Projectcards
                  title="Grids"
                  body={
                    <div>
                      <p>
                        Establish a modular grid to ensure consistency and
                        structure, creating a balanced and visually appealing UI
                        design.
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

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div className="mackmg-img">
                <div className="pt-5">
                  <img
                    className="heros-image1"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751241311/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/Frame_1984077374_qxgddz.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751241311/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/Frame_1984077374_qxgddz.png"
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
                data-aos="fade-up"
                data-aos-duration="3000"
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="Wireframe"
                  body={
                    <div>
                      <p>
                        A wireframe is a fundamental visual representation of a
                        digital interface, delineating the structure and layout
                        without the inclusion of design elements or content. It
                        serves as a blueprint for the user interface design and
                        functionality.
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

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="mackmg-img"
              >
                <div className="pt-5">
                  <img
                    className="heros-image1"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751241730/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/Frame_1618873214_krcb8t.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751241729/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/Frame_19840773799_mtdmcn.png"
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
              <div className="kmg-folio-text-1">
                <Projectcards
                  title="Style Guide"
                  body={
                    <div>
                      <p>
                        A style guide is a document that defines design
                        standards and guidelines for a project, ensuring
                        uniformity in visual elements and branding across
                        different mediums.
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

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div className="mackmg-img">
                <div className="pt-5">
                  <img
                    className="heros-image1"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751376564/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/Frame_1618873234_cvzaya.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751376632/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/Frame_1984077379_sso7zp.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
      </div>

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
          <div class="row">
            <div
              data-aos="zoom-out-up"
              data-aos-duration="3000"
              class="col-sm-12 col-md-12 col-lg-10"
            >
              <div className="mackmg-img">
                <div className="pt-5">
                  <img
                    className="heros-image1"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751376827/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/O33QW51_3_lavpsp.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751376819/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/O33QW51_4_fuseby.png"
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
                data-aos="fade-up"
                data-aos-duration="3000"
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="Final UI Design"
                  body={
                    <div>
                      <p>
                        The Final Design phase was where everything came to
                        life; every insight, pain point, and opportunity
                        gathered during research was transformed into purposeful
                        visual solutions. My goal here wasn’t just to make
                        things “look good,” but to design a digital space that{" "}
                        <strong>
                          feels safe, easy to use, and deeply supportive
                        </strong>{" "}
                        for sickle cell patients and their caregivers. I focused
                        on crafting a seamless, intuitive interface that helps
                        patients book appointments effortlessly, track their
                        health records, and communicate with doctors in real
                        time, all while feeling understood and cared for.
                      </p>
                      <p>
                        I focused on crafting a seamless, intuitive interface
                        that helps patients book appointments effortlessly,
                        track their health records, and communicate with doctors
                        in real time, all while feeling understood and cared
                        for.
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

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-3"></div>
        <div class="col-sm-12 col-md-12 col-lg-9">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-7">
              <div className="kmg-folio-text-1">
                <Projectcards
                  title="The Result"
                  body={
                    <div>
                      <p>
                        This final design balances{" "}
                        <strong>
                          functionality, accessibility, and compassion.
                        </strong>{" "}
                        It’s not just a hospital website, it’s a platform where
                        people living with Sickle Cell can feel seen, supported,
                        and in control of their healthcare journey.
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

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="zoom-out-up"
                data-aos-duration="3000"
                className="mackmg-img"
              >
                <div className="pt-5">
                  <img
                    className="heros-image1"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751379484/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/Frame_1618873098_wvaeau.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751379699/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/Frame_1984077379_q9jz3o.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
      </div>

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="zoom-out-up"
                data-aos-duration="3000"
                className="mackmg-img"
              >
                <div className="pt-5">
                  <img
                    className="heros-image1"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751378020/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/Frame_1984077378_hfvxbo.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751379695/Moruf%20Adebola%20Portfolio%202025/Sicklefolio/Frame_1984077379s_hhzndq.png"
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
                data-aos="fade-up"
                data-aos-duration="3000"
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="key learnings Learned"
                  body={
                    <ol>
                      <li>
                        The key lesson is to enhance patient engagement and
                        healthcare delivery through technology by:
                      </li>
                      <li>
                        Providing real-time alerts and reminders to keep
                        patients informed and ensure medication adherence.
                      </li>
                      <li>
                        Creating accessible multimedia content to highlight
                        hospital services and improve user experience.
                      </li>
                      <li>
                        Implementing a secure patient portal for easy access to
                        medical records, communication with healthcare
                        providers, and management of treatment plans.
                      </li>

                      <p></p>
                    </ol>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-3"></div>
      </div>

      <div className="row project">
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
                  body={
                    <div>
                      <p>
                        <strong>What I Would Have Done Differently:</strong>
                      </p>
                      I would have developed a more user-friendly, secure
                      patient portal with intuitive navigation, allowing
                      patients to effortlessly access their medical records,
                      communicate with doctors, and manage prescriptions. By
                      prioritizing these areas, I could have significantly
                      improved the overall patient experience and adherence to
                      treatment plans.
                    </div>
                  }
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

export default Sicklefolio;
