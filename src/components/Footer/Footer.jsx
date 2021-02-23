import React from "react";

const Footer = () => {
  return (
    <>
      <div className="row copyright-border">&nbsp;</div>
      <div className="row copyright">
        <div className="text-left my-2 w-100 col-6">&#x24B8; 2020 Copyright</div>
        <div className="text-right col-6">
          <a href="https://www.linkedin.com/in/sahil-patel-93a0972b">
            <img width="30" height="25" src="./Assets/Images/LI-In-Bug.png" />
          </a>
          <a href="https://github.com/Spatel134">
            <img width="100" height="35" src="./Assets/Images/GitHub_Logo_White.png" />
          </a>
          <a href="mailto:Patelsahil0789@gmail.com">
            <img width="30" height="30" src="./Assets/Images/mailButton.png" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
