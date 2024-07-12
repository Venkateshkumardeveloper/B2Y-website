// import React from 'react'

// import { Front } from "../styledComponent";
// import { FaArrowDown } from "react-icons/fa6";
// import {OurStoryImg1 } from "../../assets/images/StockCake-Robot Handshake Interaction_1720783427.jpg"
// import {OurMissionImg2} from "../../assets/images/StockCake-Tech Office Scene_1720783500.jpg"

// const Portfolio = () => {
//     const handleButtonClick = () => {
//         // Scroll down by 100vh
//         window.scrollTo({
//           top: window.innerHeight,
//           behavior: "smooth",
//         });
//       };
//   return (
//     <>
//     <Front>

//         <div className="contact-heading">
//           <h1>Portfolio</h1>
//           <p>
//             Welcome to B2Y, where innovation meets connectivity. We are thrilled
//             to connect with you and explore how our expertise in IT solutions
//             can empower your business.
//           </p>
//           <div className="contact-buttons">
//             <button className="arrow-button" onClick={handleButtonClick} >
//               Portfolio
//               <span className="arrow-icon">
//                 <FaArrowDown />
//               </span>
//             </button>
//           </div>
//         </div>
//       </Front>
//       <div className="our_services_section">
//         <div className="our_service">
//           <h1 className="our_service_heading">
//             Port<span className="color">folio</span>
//           </h1>
//           <p className="our_service_para">
//           What we have done so far
//           as we are into software development, and have done quite no. of projects within the short time.

//           </p>
//           </div>
//           </div>
//           <div className="storyContainer">
//         <div className="storySection">
//           <div className="story_img">
//             <img src={OurStoryImg1} alt="Our_Story" className="storyimg" />
//           </div>
//           <div className="storyText">
//             <div className="storyText_head_section">
//               <h2 className="our_story_head">
//                 Our<span className="color space">Story</span>
//               </h2>
//               <span className="out_story_subheading">
//                 From Vision to Venture
//               </span>
//             </div>
//             <p className="our-story_para">
//               Established from a mutual enthusiasm for pioneering technology,
//               B2Y was conceived by a consortium of experienced professionals
//               united by a common goal to establish a company transcending
//               traditional IT offerings. Our team, encompassing backgrounds in
//               software development and cybersecurity, amalgamates a spectrum of
//               proficiency and a unified dedication to unparalleled quality.
//             </p>
//           </div>
//         </div>
//         <div className="storySection reverse">
//           <div className="storyText">
//             <div className="storyText_head_section">
//               <h2 className="our_story_head">
//                 Our<span className="color space">Mission</span>
//               </h2>
//               <span className="out_story_subheading">
//                 Empowering Your Digital Journey
//               </span>
//             </div>
//             <p className="our-story_para">
//               Born from a shared passion for cutting-edge technology, B2Y was
//               founded by a group of seasoned professionals with a collective
//               vision to create a company that goes beyond conventional IT
//               services. With backgrounds ranging from software development to
//               cybersecurity, our diverse team brings a wealth of expertise and a
//               shared commitment to excellence.
//             </p>
//           </div>
//           <div className="story_img">
//             <img src={OurMissionImg2} alt="Our_Story" className="storyimg" />
//           </div>
//         </div>
//       </div>
//       </>
//   )
// }

// export default Portfolio


import React from 'react';
import { Front } from "../styledComponent";
import { FaArrowDown } from "react-icons/fa6";
import OurStoryImg1 from "../../assets/images/StockCake-Robot Handshake Interaction_1720783427.jpg";
import OurMissionImg2 from "../../assets/images/StockCake-Tech Office Scene_1720783500.jpg";

const Portfolio = () => {
  const handleButtonClick = () => {
    // Scroll down by 100vh
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Front>
        <div className="contact-heading">
          <h1>Portfolio</h1>
          <p>
            Welcome to B2Y, where innovation meets connectivity. We are thrilled
            to connect with you and explore how our expertise in IT solutions
            can empower your business.
          </p>
          <div className="contact-buttons">
            <button className="arrow-button" onClick={handleButtonClick}>
              Portfolio
              <span className="arrow-icon">
                <FaArrowDown />
              </span>
            </button>
          </div>
        </div>
      </Front>
      <div className="our_services_section">
        <div className="our_service">
          <h1 className="our_service_heading">
            Port<span className="color">folio</span>
          </h1>
          <p className="our_service_para">
            What we have done so far as we are into software development, and have done quite no. of projects within the short time.
          </p>
        </div>
      </div>
      <div className="storyContainer">
        <div className="storySection">
          <div className="story_img">
            <img src={OurStoryImg1} alt="Our_Story" className="storyimg" />
          </div>
          <div className="storyText">
           
            <p className="our-story_para">
            Currently working with one of the inhouse Product development.

            </p>
            <p className="our-story_para">

            We have successfully completed Club association project for German client collaborating with Nerds & Geeks.
            </p>
            <p className="our-story_para">

            We have done website development for MCDMF successfully and some of other clients.
            </p>
            <p className="our-story_para">

            We are into outsourcing and provided some software services for Cloudstier solutions.
            </p>
            <p className="our-story_para">

        Associated with SustainEdge Consulting to provide Software services with some of the modules.  
                      </p>




          </div>
        </div>
        <div className="storySection reverse">
          <div className="storyText">
   
          <p className="our-story_para">
          Have done Inventory Management mobile application for Data Processing Solutions.

            </p>
            <p className="our-story_para">

            Have implemented E-Commerce website for Tri-Gen Technologies.
            </p>
            <p className="our-story_para">

            We also do Outsourcing for Mantra labs, SustainEdge and various clients.
            </p>
            <p className="our-story_para">

            Associated Tech partnership with Focify Solutions.
            </p>
            <p className="our-story_para">

            We have been successfully registered StartUp India certificate.

            </p>
            <p className="our-story_para">

            We are here to help you with software services, Outsourcing and Product development.
</p>
          </div>
          <div className="story_img">
            <img src={OurMissionImg2} alt="Our_Mission" className="storyimg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
