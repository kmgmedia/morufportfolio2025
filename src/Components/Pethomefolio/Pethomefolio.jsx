import React from "react";
import "./pethomefolio.scss";
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

const Pethomefolio = () => {
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
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222242/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/Phonepethomebig_oybyro.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222262/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/Phonepethomesm_y4pcck.png"
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
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="PetHome connects pet owners to trusted grooming,
                  adoption, and vet services through a simple, friendly app."
                  body="PetHome is a digital platform created to help pet lovers find
                  and connect with trusted pet care services like adoption, grooming,
                  pet sitting, and vet support. The goal was to make it easy for users
                  to discover and book these services while building a friendly and
                  supportive pet-owner community.
                  In this project, I handled the full product design process — from
                  user research and wireframing to UI/UX design and high-fidelity
                  prototyping. My focus was on creating a smooth and enjoyable
                  experience for users, whether they’re adopting a pet, booking
                  a groomer, or reading care tips. The result is a clean, responsive,
                  and easy-to-use app that reflects the love and trust PetHome aims to offer."
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
                  <p>- Brand Design</p>
                  <p>- Wireframe</p>
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
                  <p>- 5 Months</p>
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
                        <strong>PetHome</strong> is a digital platform designed
                        to connect pet lovers with trusted pet care services,
                        including adoption, grooming, pet sitting, and
                        veterinary support. The goal of this project was to
                        create a user-friendly interface that simplifies the
                        process of finding and booking pet-related services,
                        while also fostering a warm and engaging community for
                        pet owners.
                      </p>

                      <p>
                        My role involved end-to-end product design, including
                        user research, wireframing, UI/UX exploration, and
                        high-fidelity prototyping. The focus was on creating a
                        seamless experience for users, whether they are
                        exploring adoption options, booking a groomer, or
                        reading tips on pet care. The result is a modern,
                        responsive, and intuitive interface that reflects the
                        love and care PetHome stands for.
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
                  title="Target Audience"
                  body={
                    <ul>
                      <p>
                        <strong>PetHome</strong> caters to pet owners and animal
                        lovers of all ages who seek reliable and convenient pet
                        services. Key segments include:
                      </p>
                      <li>
                        <strong>Young Professionals (Ages 25–40):</strong>{" "}
                        Tech-savvy, busy individuals who use the platform for
                        quick bookings of grooming, vet services, and pet care.
                      </li>
                      <li>
                        <strong>Families (Ages 30–50):</strong> Pet-owning
                        households looking for trusted services and easy
                        management for multiple pets.
                      </li>
                      <li>
                        <strong>Older Adults (Ages 50+):</strong> Seeking simple
                        interfaces for pet care, adoption, and companionship.
                      </li>
                      <li>
                        <strong>Animal Lovers (Ages 18+):</strong> Passionate
                        about adoption, volunteering, and animal welfare. These
                        users value convenience, trust, and community-driven
                        features.
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
                data-aos-duration="4000"
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="Problem Statement"
                  body={
                    <ul>
                      <p>
                        Users of previous pet care apps have faced several
                        challenges that hindered their experience:
                      </p>
                      <li>
                        <strong>Complex Navigation</strong> Many pet care apps
                        were cluttered and difficult to navigate, making it hard
                        for users to find the services they needed quickly.
                      </li>
                      <li>
                        <strong>Lack of Trust and Transparency: </strong>
                        Users often struggled to find trustworthy service
                        providers, with limited reviews or certifications
                        available, leading to uncertainty in service quality.
                      </li>
                      <li>
                        <strong>Poor Mobile Experience:</strong> Some apps
                        lacked mobile optimization, which made it frustrating
                        for users to manage bookings and services on-the-go.
                      </li>
                      <li>
                        <strong>Limited Community Engagement:</strong> Previous
                        platforms failed to build a strong sense of community,
                        making it difficult for users to connect with other pet
                        owners or share experiences.
                      </li>
                      <li>
                        <strong>Overwhelming Options:</strong> Too many options
                        without proper filtering overwhelmed users, making the
                        decision-making process harder and time-consuming.
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
                  title="Solutions"
                  body={
                    <ul>
                      <p>
                        The <strong>PetHome app</strong> was designed to tackle
                        key pain points and enhance the user experience:
                      </p>
                      <li>
                        <strong>Simplified Navigation:</strong> The app features
                        a clean, intuitive interface with easy-to-use
                        navigation, allowing users to quickly find and book the
                        pet services they need, whether it’s grooming, vet
                        visits, or adoption.
                      </li>
                      <li>
                        <strong>Verified Service Providers: </strong>
                        Each service provider is carefully vetted with user
                        reviews and ratings, ensuring trust and transparency for
                        users looking for quality care for their pets.
                      </li>
                      <li>
                        <strong>Mobile-First Design:</strong> The app is fully
                        optimized for mobile devices, allowing users to book
                        services, manage appointments, and access resources
                        on-the-go with a smooth, responsive experience.
                      </li>
                      <li>
                        <strong>Community Building:</strong> PetHome encourages
                        interaction by integrating social features such as
                        forums, tips from fellow pet owners, and the ability to
                        share experiences, creating a supportive pet-loving
                        community.
                      </li>
                      <li>
                        <strong>Filtered Search & Recommendations:</strong> The
                        app offers smart filtering, allowing users to find
                        exactly what they need based on location, service type,
                        and ratings, eliminating the overwhelming choices found
                        in other apps.
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
                data-aos-duration="6000"
                className="mackmg-img-2"
              >
                <div className="pt-5">
                  <img
                    className="heros-image3"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222208/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/mapping_uvzlrg.png"
                    alt=""
                  />
                  <img
                    className="heros-image4"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222210/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/mapping2_yufgys.png"
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
                  title="Initial Research"
                  body={
                    <div>
                      <p>
                        Before starting the design for PetHome, I carried out
                        research to better understand what pet owners really
                        need and what problems they face with other apps.
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
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222215/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/mapping3_leyrek.png"
                    alt=""
                  />
                  <img
                    className="heros-image4"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222215/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/mapping4_rlwrbp.png"
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
                  title="Stakeholder Interview"
                  body={
                    <div>
                      <p>
                        To understand the business goals and expectations, I
                        conducted a stakeholder interview where I gathered
                        insights about the app’s vision, target audience, key
                        features, and success metrics. This helped align the
                        design process with the overall business objectives and
                        ensured the final product meets both user needs and
                        stakeholder goals.
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
                  title="Stakeholder Interview Questions"
                  body={
                    <ul className="pt-4">
                      <h4>
                        <strong>Groomers</strong>
                      </h4>
                      <li>How do pet owners currently book your services?</li>
                      <li>What challenges do you face with online bookings?</li>
                      <li>
                        How do you manage appointments and client communication?
                      </li>
                      <li>
                        What features would you like to see in an app that
                        connects you with pet owners?
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
      <div className="row project">
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
                  title="Veterinarians"
                  body={
                    <ul>
                      <li>
                        How do pet owners usually reach out to bookappointments
                        with you?
                      </li>
                      <li>
                        What common issues do you face when managing patient
                        records and visits?
                      </li>
                      <li>
                        What information do you need from pet owners before a
                        consultation?
                      </li>
                      <li>
                        What digital features would help improve your workflow
                        and client experience?
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
                  title="Pet Trainers"
                  body={
                    <ul>
                      <li>
                        How do pet owners usually find and contact you for
                        training services?
                      </li>
                      <li>
                        What challenges do you face when scheduling and managing
                        sessions?
                      </li>
                      <li>
                        What key information do you need before starting a
                        training program?
                      </li>
                      <li>
                        What app features would help you deliver better training
                        experiences to clients?
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
                  title="Pet Food Suppliers"
                  body={
                    <ul>
                      <li>
                        How do customers currently place orders for pet food
                        from you?
                      </li>
                      <li>
                        What challenges do you face with inventory and delivery
                        management?
                      </li>
                      <li>
                        What type of product information do customers often ask
                        for before buying?
                      </li>
                      <li>
                        What digital tools or features would help improve your
                        sales and customer service?
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
                data-aos-duration="3000"
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="User Interviews"
                  body={
                    <div>
                      <p>
                        To understand the needs and pain points of potential
                        users, I conducted interviews with 5 pet owners from
                        different backgrounds. The goal was to identify the
                        challenges they face when accessing pet care services
                        and explore their preferences for a digital solution.
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
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222216/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/mapping5_dyfv8i.png"
                    alt=""
                  />
                  <img
                    className="heros-image4"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222217/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/mapping6_wspj9l.png"
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
                  title="Persona"
                  body={
                    <div>
                      <p>
                        The persona represents a busy individual who manages
                        work, family, and pet care. Their main needs include
                        finding trustworthy services for pet grooming, medical
                        care, and food, all while looking for a seamless and
                        convenient experience. This insight helps guide our
                        design to address these needs and improve the overall
                        user experience.
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
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222161/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/Userpersona_tza9mn.png"
                    alt=""
                  />
                  <img
                    className="heros-image4"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222095/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/Userpersona1_kzj5gf.png"
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
                  title="Empathy Map"
                  body={
                    <div>
                      <p>
                        Our persona is a busy individual balancing work, family,
                        and pet care. They need reliable, flexible services that
                        fit their tight schedule and value easy-to-use
                        platforms. Their main challenges include limited time
                        for research and concerns over service quality. This
                        insight helps us design features that offer convenience,
                        trust, and peace of mind.
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
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222915/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/empathymap_nhmspt.png"
                    alt=""
                  />
                  <img
                    className="heros-image4"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222914/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/empathymap1_rjs2wv.png"
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
                  title="User Journey Map"
                  body={
                    <div>
                      <p>
                        This journey map outlines the key stages a busy pet
                        owner goes through when searching for and using a
                        digital pet care service. It helps us understand their
                        actions, emotions, and pain points, guiding us to design
                        a smoother, more supportive experience at every step.
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
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="zoom-out-up"
                data-aos-duration="6000"
                className="mackmg-img7"
              >
                <div className="pt-5">
                  <img
                    className="heros-image3"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222207/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/map_uokjls.png"
                    alt=""
                  />
                  <img
                    className="heros-image4"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222207/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/map1_wxqicr.png"
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
                  title="Competitive Analysis"
                  body={
                    <div>
                      <p>
                        This analysis compares major players in the pet care
                        industry, highlighting what they do well and where they
                        fall short. It helps identify strategic gaps where our
                        product can stand out , such as all-in-one convenience,
                        seamless UX, and broader service coverage.
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
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751223103/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/Competitorfeature_oi7hbl.png"
                    alt=""
                  />
                  <img
                    className="heros-image4"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222096/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/Competitorfeature1_gqvqpu.png"
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
                  title="Ideation & Task Flow"
                  body={
                    <div>
                      <p>
                        To address the core needs of modern pet
                        owners—convenience, trust, and comprehensive care—we
                        brainstormed feature ideas that simplify pet management
                        in one place. The goal was to create an app that
                        supports daily pet care tasks, reduces stress, and
                        enhances the owner-pet relationship.
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
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222097/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/Ideation_jfqd9z.png"
                    alt=""
                  />
                  <img
                    className="heros-image4"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222094/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/Ideation2_zlsv1c.png"
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
                  title="Low-Fidelity Wireframes"
                  body={
                    <div>
                      <p>
                        The wireframes outline the core structure and layout of
                        the PetHome app, focusing on intuitive navigation and
                        easy access to essential features. They serve as a
                        blueprint to visualize user interactions and streamline
                        the grooming service flow before moving into
                        high-fidelity designs.
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
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="zoom-out-up"
                data-aos-duration="6000"
                className="mackmg-img-2"
              >
                <div className="pt-3">
                  <img
                    className="heros-image3"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222041/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/phoneframe_rrlkzd.png"
                    alt=""
                  />
                  <img
                    className="heros-image4"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222094/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/phoneframe2_n2cc79.png"
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
                  title="Style Guide"
                  body={
                    <div>
                      <p>
                        The style guide defines the visual identity of the
                        PetHome app, ensuring consistency across all screens. It
                        includes the color palette, typography, iconography, and
                        UI components, all chosen to evoke trust, warmth, and
                        ease for pet owners navigating the platform.
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

      {/* THIS IS THE Style Guide SESSION AND WE MIGHT STILL NEED IT LATER ON  */}

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="zoom-out-up"
                data-aos-duration="6000"
                className="mackmg-img7"
              >
                <div className="pt-3">
                  <img
                    className="heros-image3"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222095/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/phoneframe3_cziu1j.png"
                    alt=""
                  />
                  <img
                    className="heros-image4"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222095/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/phoneframe4_mb91tm.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div className="mackmg-img7">
                <div
                  data-aos="zoom-out-up"
                  data-aos-duration="6000"
                  className="pt-3"
                >
                  <img
                    className="heros-image3"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222041/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/phoneframe5_ieodgr.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
      </div>

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="zoom-out-up"
                data-aos-duration="6000"
                className="mackmg-img7"
              >
                <div className="pt-3">
                  <img
                    className="heros-image3"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222040/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/phoneframe6_emff0c.png"
                    alt=""
                  />
                  <img
                    className="heros-image4"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222038/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/phoneframe7_wp5ccu.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
      </div>

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="zoom-out-up"
                data-aos-duration="6000"
                className="mackmg-img-2"
              >
                <div className="pt-3">
                  <img
                    className="heros-image3"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222039/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/phoneframe8_gymm4h.png"
                    alt=""
                  />
                  <img
                    className="heros-image4"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222038/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/phoneframe9_iuzl73.png"
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
                  title="High-Fidelity"
                  body={
                    <div>
                      <p>
                        These are the final and fully designed screens of the
                        PetHome app. They show exactly how the app will look and
                        feel when someone uses it. From colors and buttons to
                        text and images, everything is neat, clear, and easy to
                        understand—making it simple for pet owners to book
                        services and care for their pets with just a few taps.
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
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="zoom-out-up"
                data-aos-duration="6000"
                className="mackmg-img7"
              >
                <div className="pt-3">
                  <img
                    className="heros-image3"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222040/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/phoneframe10_nqltbl.png"
                    alt=""
                  />
                  <img
                    className="heros-image4"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222040/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/phoneframe11_dvyb9l.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
      </div>

      <div className="row project">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div
                data-aos="zoom-out-up"
                data-aos-duration="1000"
                className="mackmg-img-2"
              >
                <div className="pt-3">
                  <img
                    className="heros-image3"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222048/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/phoneframe12_vaymfk.png"
                    alt=""
                  />
                  <img
                    className="heros-image4"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1751222040/Moruf%20Adebola%20Portfolio%202025/Moruf%20Adebola%20Portfolio%202025/phoneframe13_cfxxts.png"
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
                  title="Three key learnings"
                  body={
                    <ol>
                      <li>
                        Working on PetHome taught me how important it is to
                        create a warm, friendly experience that reflects the
                        emotional bond people have with their pets. Visuals,
                        language, and layout all played a role in building trust
                        and comfort for users.
                      </li>
                      <br />
                      <li>
                        I learned how powerful clear, step-by-step flows are —
                        especially for tasks like booking services or adopting a
                        pet. Making the process feel simple and predictable
                        helped users feel more confident and engaged.
                      </li>
                      <li>
                        Conducting research with real pet owners helped shape
                        the design in meaningful ways. Their feedback helped
                        prioritize the right features and revealed pain points I
                        wouldn't have considered without listening directly to
                        them.
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

      <div className="row project">
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
                  title="Next Steps"
                  body={
                    <ol>
                      <li>
                        This project will also be used to pitch myself to
                        potential clients or companies looking for thoughtful,
                        user-centered product design.
                      </li>
                    </ol>
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

export default Pethomefolio;
