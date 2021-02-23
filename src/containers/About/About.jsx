import React from "react";
import profileImg from "../../assets/img/Sahil-Patel.jpeg"
// import resume from "../../assets/resume.pdf";

const About = () => {
  return (
    <div className="container">
      <div className="main-layout col-lg-9 col-sm-12">
        <div className="row w-100">
          <header className="col-12 mt-3">
            <h1 className="page-header border-bottom font-weight-bold">About Me</h1>
          </header>
        </div>
        <div className="row">
          <div className="col-12">
            <img
              className="img-fluid float-left mr-4"
              src={profileImg}
              alt="Picture of Sahil Patel"
            />
            <p>Hello, my name is Sahil Patel.</p>
            <p>
              I’m an investor and co-owner of a marketing/tech company here in Atlanta, Georgia. My investments varies
              from businesses from gas stations to hotels around the nation. My marketing and tech company works with
              car dealership nation wide. They provide digital content from SEO to consulting services to help dealers
              their build digital footprint to get more leads. The technology side, we provide VR/AR services to the
              dealers to show their consumer the cockpit of any vehicle. This allows customers to go to any dealership
              website to see the features of the vehicle. This would be done either on a browser or mobile device.
              Having the VR/AR functionality, This will allows the consumers to interact with the vehicle and understand
              what features come with the vehicle and see the different color options before making their purchase.
            </p>
            <p>
              I love technology. That is one of the reasons why I wanted to understand how something is created and
              services that can ease someone’s life. That is why I want to further my education and learn computer
              science to create more tech companies and build applications and services that would help people in the
              world.
            </p>
            <p>
              I was born and raised in Philadelphia, Pennsylvania. My parents are originally from India. This would make
              me the first generation to be born here in America. I enjoy playing and watching sports. I love doing any
              outdoor activities like hiking, riding a bike, and more. I enjoy traveling and huge foodie. Here’s a link
              to my
              <a href="https://www.linkedin.com/in/sahil-patel-93a0972b">LinkedIn</a>
              and
              {/* <a href="./Assets/Resume (NA).pdf">Resume</a>. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
