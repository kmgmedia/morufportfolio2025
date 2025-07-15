import React from "react";
import "./smarthomefolio.scss";
import { Cloudinary } from "@cloudinary/url-gen";
import Projectcards from "../Projectcards/Projectcards";
import { HashLink } from "react-router-hash-link";
import Footer from "../Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

// All this page styling is been done from PROJECTCARDS Folder
// ANY CORRECTIONS ARE TO BE MADE FROM THERE AND ITS WILL CHANGE
// ALL OTHER WEB PAGE DESIGNS TOO. BE CAREFUL.

const Smarthomefolio = () => {
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
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752435938/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1984077381_xecuo1.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752436443/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1984077382_fz4n3e.png"
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
                  title="Innovating Real Estate Through Smart Home Technology"
                  body={
                    <div>
                      <p>
                        <strong>Smart home</strong> technology is redefining the
                        future of real estate by combining convenience,
                        security, and energy efficiency in a single living
                        experience. At the heart of this innovation is a shift
                        toward intelligent spaces that adapt to the needs of
                        modern homeowners, from automated lighting and climate
                        control to smart locks and voice-activated systems.
                      </p>
                      <p>
                        By integrating tech-driven features into our properties,
                        we offer more than just a home — we provide a connected
                        lifestyle that enhances everyday living. This
                        transformation not only improves quality of life but
                        also increases property value, reduces energy costs, and
                        makes real estate more future-proof.
                      </p>
                      <p>
                        Whether you're a homeowner, investor, or developer,
                        embracing smart home innovation is the key to staying
                        ahead in today’s fast-evolving real estate landscape.
                      </p>
                    </div>
                  }
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
                  <p>- UX Designer</p>
                  <p>- UI Designer</p>
                  <p>- Researcher</p>
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
                        I introduced products and features that significantly
                        enhanced the conversion rate for Smart Home Real Estate
                        and the easy way clients can purchase properties from
                        anywhere in the world. In this project, my goal was to
                        leverage technology to significantly improve the
                        property search experience and streamline real estate
                        transactions. By implementing advanced communication
                        systems, creating optimized multimedia content, and
                        developing a user-friendly real estate app, I aimed to
                        address several critical areas in the property search
                        and buying process.
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
                  title="Design Approach:"
                  body={
                    <div>
                      <p>
                        Improving the user experience (UX) in real estate starts
                        with a comprehensive understanding of distinct user
                        segments, including international buyers, sellers, and
                        agents. This entails conducting thorough research to
                        pinpoint their challenges and preferences. Subsequently,
                        implementing usability testing and continuously
                        gathering feedback is essential.
                      </p>
                      <div className="pt-5">
                        <img
                          className="heros-image1"
                          src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752438870/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Group_427322150_nndcmr.png"
                          alt=""
                        />
                        <img
                          className="heros-image2"
                          src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752439151/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Group_427322151_pyfuf3.png"
                          alt=""
                        />
                      </div>
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
                data-aos-duration="5000"
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="Design Solution:"
                  body={
                    <div>
                      <p>
                        <strong>”Smart Home”</strong> Goal is to assist those
                        searching for their dream homes and to support agents
                        and property owners looking to showcase their luxury
                        properties for sale.
                      </p>
                      <p>
                        <strong>"Smart Home"</strong> is a modern and innovative
                        online platform design to represent a distinguished
                        brand of luxury homes and a superb lifestyle. Our
                        mission is to deliver exceptional customer experiences,
                        welcoming buyers from around the world to seamlessly
                        acquire and securely purchase their dream homes in
                        <strong>Lagos, Nigeria.</strong>
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
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752440468/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Timeline1_yjwdil.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752440465/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Timeline_fvszdv.png"
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
                  title="Competitive Analysis"
                  body={
                    <div>
                      <p>
                        To ensure our real estate app stood out in a highly
                        competitive market, I led a detailed competitive
                        analysis across top-performing platforms. I evaluated
                        user experience flow, feature sets, onboarding
                        processes, search/filter functionality, and visual
                        design patterns. This analysis helped identify gaps and
                        opportunities, guiding our design decisions to enhance
                        usability, prioritize must-have features, and deliver a
                        more intuitive and engaging product experience.
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
                data-aos-duration="4000"
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="Key Competitors"
                  body={
                    <ul>
                      <p className="pt-3">
                        As part of the competitive research for our real estate
                        app, I analyzed three major players in the Nigerian
                        market — PropertyPro.ng,{" "}
                        <strong>PrivateProperty.com.ng,</strong> and
                        <strong>NigeriaPropertyCentre.com,</strong> to identify
                        what they do well, where they fall short, and how we
                        could differentiate.
                      </p>
                      <li className="pt-3">
                        <strong>propertypro.ng</strong> offers a vast inventory
                        of property listings and provides detailed information
                        on each property, such as pricing, location, features,
                        and agent contacts. However, a key issue is the presence
                        of <strong>outdated or inactive listings,</strong> which
                        negatively affects user trust and retention. This
                        highlighted the importance of integrating a real-time
                        update mechanism and listing verification system in our
                        app.
                      </li>
                      <li className="pt-3">
                        <strong>privateproperty.com.ng</strong> has a{" "}
                        <strong>clean, user-friendly interface</strong> and{" "}
                        <strong>robust search filters</strong> that allow users
                        to narrow down properties by location, price, property
                        type, and more. However, it lacks{" "}
                        <strong>rich multimedia content</strong> like 360°
                        virtual tours or walkthrough videos. This insight
                        inspired us to consider integrating immersive media
                        options to give users a clearer sense of space and
                        improve engagement.
                      </li>
                      <li className="pt-3">
                        <strong>nigeriapropertycentre.com</strong> stands out
                        for its{" "}
                        <strong>reliable listings and wide coverage,</strong>{" "}
                        often regarded as one of the most trusted platforms.
                        However, it falls short in{" "}
                        <strong>
                          personalization and intelligent recommendations,
                        </strong>{" "}
                        offering a static experience rather than a dynamic,
                        user-tailored journey. This gap gave us the opportunity
                        to explore features like AI-driven property suggestions
                        based on user behavior and saved searches.
                      </li>
                      <p className="pt-3">
                        By analyzing these platforms, I was able to identify
                        core user pain points and missed opportunities. These
                        findings directly influenced our product’s UX strategy,
                        ensuring that our app doesn't just compete, it leads by
                        solving real user problems, offering fresh content, and
                        creating a more personalized property discovery
                        experience.
                      </p>
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
                data-aos-duration="4000"
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="Unique Selling Proposition (USP):"
                  body={
                    <ul>
                      <li className="pt-3">
                        <strong>Personalized Recommendations:</strong> AI-driven
                        suggestions tailored to user preferences and lifestyle.
                      </li>
                      <li className="pt-3">
                        <strong>Verified Reviews:</strong> Trusted ratings and
                        reviews of real estate agents and companies.
                      </li>
                      <li className="pt-3">
                        <strong>Comprehensive Virtual Tours:</strong>{" "}
                        High-quality multimedia content for detailed property
                        views.
                      </li>
                      <li className="pt-3">
                        <strong>Seamless Communication:</strong> Integrated chat
                        for quick and efficient agent interactions.
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
                data-aos-duration="4000"
                className="kmg-folio-text-1"
              >
                <Projectcards
                  title="Areas for Improvement:"
                  body={
                    <ul>
                      <li className="pt-3">
                        <strong>Geographical Expansion:</strong>Gradually
                        increase coverage to include more regions across
                        Nigeria.
                      </li>
                      <li className="pt-3">
                        <strong>User Feedback Integration:</strong> Continuously
                        update and improve features based on user input.
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
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752438530/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1618873098_ce4tuv.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752443078/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1618873126_soqgdd.png"
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
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="mackmg-img"
              >
                <div className="pt-5">
                  <img
                    className="heros-image1"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752443248/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1618873106_xee5ak.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752443244/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1618873126q_nrmpvp.png"
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
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="mackmg-img"
              >
                <div className="pt-5">
                  <img
                    className="heros-image1 pt-5"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752443623/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Group_1931_cfqp4u.png"
                    alt=""
                  />
                  <img
                    className="heros-image2 pt-5"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752443625/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1984077385_rvyijm.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
      </div>

      <div className="row project pt-5">
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
                  title="Market Research"
                  body={
                    <div>
                      <p>
                        The market insights, the app can address the specific
                        needs of Nigerian real estate consumers, offering a
                        trustworthy, convenient, and user-friendly platform that
                        stands out from existing competitors. This approach will
                        help capture a significant share of the growing real
                        estate market in Nigeria.
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
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752444966/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1618873057_fh3sy9.png"
                    alt=""
                  />
                  <img
                    className="heros-image2 pt-3"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752444964/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1984077388_ar9wms.png"
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
                  title="Key Features of the SmartHome App"
                  body={
                    <ol>
                      <li className="pt-3">
                        <strong>
                          Home Discovery with Categorized Listings
                        </strong>
                        <ul>
                          <li>
                            Browse curated property types (e.g. Duplex,
                            Apartment, Condo) directly from the homepage.
                          </li>
                          <li>
                            Clear visual hierarchy for “To Purchase” properties
                            with image cards and price previews.
                          </li>
                        </ul>
                      </li>
                      <li className="pt-3">
                        <strong>Advanced Filter System</strong>
                        <ul>
                          <li>
                            Powerful filters to refine search by property type,
                            number of bedrooms/bathrooms, location, and price
                            range.
                          </li>
                          <li>
                            Clean UI that supports a quick and easy property
                            search experience.
                          </li>
                        </ul>
                      </li>
                      <li className="pt-3">
                        <strong>Wishlist Creation & Management</strong>
                        <ul>
                          <li>
                            Users can save properties into custom wishlists
                            (e.g. “For My Mama”, “Very Interested”).
                          </li>
                          <li>
                            Personalized curation that encourages revisits and
                            decision tracking.
                          </li>
                        </ul>
                      </li>
                      <li className="pt-3">
                        <strong>Messaging & Agent Interaction</strong>
                        <ul>
                          <li>
                            Built-in chat system to communicate directly with
                            property agents or homeowners.
                          </li>
                          <li>Save favorite contacts for fast follow-ups.</li>
                        </ul>
                      </li>
                      <li className="pt-3">
                        <strong>Installment Tracking</strong>
                        <ul>
                          <li>
                            Users can view monthly installment payments and keep
                            tabs on completed vs pending dues.
                          </li>
                        </ul>
                      </li>
                      <li className="pt-3">
                        <strong>Profile Creation & Verification</strong>
                        <ul>
                          <li>
                            User profile section with ID verification and badge
                            system to build trust.
                          </li>
                          <li>
                            Upload profile picture and track engagement within
                            the app.
                          </li>
                        </ul>
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
                  title="Bonus Highlights:"
                  body={
                    <ul className="pt-3">
                      <li>
                        Strong use of <strong>microcopy</strong> (e.g. “Going
                        for my Mama”) that adds emotional touch.
                      </li>
                      <li>Map integration for real-time location preview.</li>
                      <li>
                        <strong>“Get Verified”</strong> system adds a
                        trust-based UX angle.
                      </li>
                      <li>
                        Cross-screen user flow that feels smooth and natural.
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

      <div className="row project pt-3">
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
                  title="Complete Home Overviews with Interactive Media"
                  body={
                    <div>
                      <p>
                        To help users make informed and confident property
                        decisions, I designed a detailed home listing experience
                        that goes beyond basic text and pricing. Each property
                        page in the SmartHome app functions as a{" "}
                        <strong>comprehensive overview,</strong> giving users
                        full access to all the critical information they need,
                        presented in a clean, easy-to-navigate layout.
                      </p>
                      <p>
                        What sets it apart is the use of{" "}
                        <strong>interactive media,</strong>
                        which transforms static listings into rich, immersive
                        experiences. These include:
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
                      <ul>
                        <li>
                          <strong>High-resolution image carousels</strong> to
                          showcase interiors and exteriors
                        </li>
                        <li>
                          <strong>Map integration</strong> for viewing location
                          and nearby landmarks
                        </li>
                        <li>
                          <strong>In-app appointment booking</strong> to
                          instantly schedule property visits
                        </li>
                        <li>
                          <strong>Wishlist functionality</strong> to save and
                          organize favorite listings
                        </li>
                        <li>
                          <strong>Quick-share options</strong> for social or
                          peer-to-peer sharing
                        </li>
                      </ul>
                      <p>
                        This feature was designed with both functionality and
                        emotional appeal in mind, allowing users to see, feel,
                        and interact with the property before making any
                        physical move. It bridges the gap between user interest
                        and action, streamlining the path from browsing to
                        inquiry.
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
                  title="⭐ User Reviews & Ratings"
                  body={
                    <div>
                      <p>
                        To validate user satisfaction and identify future
                        improvements, we integrated a{" "}
                        <strong>User Reviews and Ratings</strong> feature within
                        the SmartHome app. This allowed users to share feedback
                        on their experience with listed properties, agents, and
                        the overall app usability.
                      </p>
                      <p className="pt-3">
                        <strong>
                          🌟🌟🌟🌟 “Very clean UI and the filters actually work!
                          I found 3 solid options in one day. Would love to see
                          more video tours in the listings though.”{" "}
                        </strong>
                        <br />
                        <i> — Michael T., Abuja</i>
                      </p>
                      <p className="pt-3">
                        <strong>
                          🌟🌟🌟🌟🌟 “The SmartHome app made house hunting so
                          easy! I loved the detailed property pages, especially
                          the wishlist and the ability to message agents
                          directly. Felt like I was using something built just
                          for me.”
                        </strong>
                        <br />
                        <i> — Chika O., Lagos</i>
                      </p>
                      <p className="pt-3">
                        <strong>
                          🌟🌟🌟🌟🌟 “I’m obsessed with the wishlist feature.
                          Being able to create custom folders like ‘For Mum’ and
                          ‘Investment Picks’ helped me stay organized and
                          focused.”
                        </strong>
                        <br />
                        <i> — Zainab A., Ibadan</i>
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
                  title="Rating Overview (Mock Data for Case Study Use)"
                  body={
                    <ul className="pt-3">
                      <li>
                        <strong>Average User Rating:</strong> 4.5 / 5
                      </li>
                      <li>
                        <strong>5-Star Ratings:</strong> 65%
                      </li>
                      <li>
                        <strong>4-Star Ratings:</strong> 25%
                      </li>
                      <li>
                        <strong>3-Star Ratings:</strong> 8%
                      </li>
                      <li>
                        <strong>2-Star or Below:</strong> 2%
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
                  title="Outcome & Impact:"
                  body={
                    <ul className="pt-3">
                      <li>Increased user trust in listings</li>
                      <li>
                        Provided valuable feedback loop for improving features
                      </li>
                      <li>
                        Helped prioritize future updates (e.g., video tours,
                        agent rating system)
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
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752444542/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1984077386_y1kn8r.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752444544/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1984077387_jgje8t.png"
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
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752450238/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_2403_a9ci9w.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752450235/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1984077387s_wcixpx.png"
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
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
              <div className="mackmg-img">
                <div className="pt-5">
                  <img
                    className="heros-image1"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752450715/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1984077391e_s0omjp.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752450715/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1984077391e_s0omjp.png"
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
                <Projectcards title="Illustrations" />
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
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752450722/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1984077393_myflsv.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752450714/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1984077393w_jqfu0y.png"
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
                  title="Wireframing for success"
                  body={
                    <div>
                      <p>
                        I started the design process with low-fidelity
                        wireframes to plan the structure and flow of the app.
                        This helped me focus on the user journey, organize
                        content clearly, and spot issues early, before jumping
                        into visuals. Using tools like Figma and Miro, I was
                        able to share ideas quickly, get feedback, and make
                        smart changes fast. These wireframes became the
                        foundation for the final design, keeping everything
                        user-focused and easy to build.
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
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752451369/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1984077395_d7ueos.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752451365/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1984077396_u2pzfx.png"
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
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752452177/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1984077397_yqrtqk.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752452173/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1984077398_gg7pcc.png"
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
                        The final UI design focused on creating a clean, modern,
                        and intuitive mobile experience. I used{" "}
                        <strong>Figma</strong> to build high-fidelity screens
                        that feel smooth, responsive, and easy to navigate on
                        any phone. Every detail from layout to typography and
                        icon use, was crafted to enhance usability while keeping
                        the interface visually appealing. The goal was to make
                        users feel at home the moment they launch the app. The
                        design reflects clarity, functionality, and simplicity,
                        making it effortless for users to explore properties,
                        save their favorites, and connect with agents in just a
                        few taps.
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
                        The SmartHome app delivered a smooth, intuitive mobile
                        experience that made property search easy and enjoyable.
                        Users praised the clean design, fast navigation, and
                        rich property details. The app improved engagement,
                        helped users find homes faster, and built trust through
                        verified, media-rich listings.
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
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752452890/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1984077400_lag3tk.png"
                    alt=""
                  />
                  <img
                    className="heros-image2"
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1752452885/Moruf%20Adebola%20Portfolio%202025/Smarthomefolio/Frame_1984077400w_wvoo7g.png"
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
                  title="Testing. Testing.. Testing..."
                  body={
                    <div>
                      <p>
                        We conducted testing during a soft launch of the newly
                        redesigned app and features to gather valuable insights
                        and usability data. We established a testing environment
                        and shared it with a select group of beta users who
                        willingly provided us with reports on application bugs
                        and offered constructive feedback on both the feature
                        and the overall application.
                      </p>
                      <p>
                        <strong>Iterations:</strong> We swiftly incorporated
                        necessary improvements based on the data and the
                        valuable feedback we received.
                      </p>
                      <p>
                        <strong>Ascending ever higher......</strong>
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
                  title="UX Insights"
                  body={
                    <ol>
                      <li>
                        <strong>User Preferences:</strong> Users highly value
                        detailed property information, virtual tours, and easy
                        communication with agents.
                      </li>
                      <li>
                        <strong>Mobile Optimization:</strong> Ensuring a
                        seamless experience on mobile devices is crucial for
                        user engagement.
                      </li>
                      <li>
                        <strong>Trust and Reliability:</strong> Providing
                        verified reviews and ratings is essential to build trust
                        with users.
                      </li>
                      <li>
                        <strong>Personalization:</strong> Tailored
                        recommendations significantly enhance the user
                        experience.
                      </li>
                      <li>
                        <strong>Continuous Improvement:</strong> Regularly
                        integrating user feedback helps maintain and improve app
                        quality.
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
                  title="Opportunities for Improvement"
                  body={
                    <div>
                      I would enhance the verification process by introducing a
                      more robust system for validating agent reviews and
                      property listings — strengthening user trust and platform
                      credibility. Additionally, integrating{" "}
                      <strong>advanced AI algorithms</strong> could improve the
                      accuracy and relevance of personalized property
                      recommendations, delivering a smarter, more tailored user
                      experience.
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

export default Smarthomefolio;
