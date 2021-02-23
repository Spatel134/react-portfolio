import React from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import mailButton from "../../assets/img/mailButton.png"
import LI from "../../assets/img/LI-In-Bug.png"
import GithubLogo from "../../assets/img/GitHub_Logo_White.png"

const Home = () => {
  return (
    <div id="homepage" className="container">
      <Jumbotron />
      <div className="container">
              <a href="https://www.linkedin.com/in/sahil-patel-93a0972b">
                <img width="30" height="25" src={LI} />
              </a>
              <a href="https://github.com/Spatel134">
                <img width="100" height="35" src={GithubLogo} />
              </a>
              <a href="mailto:Patelsahil0789@gmail.com">
                <img width="30" height="30" src={mailButton} />
              </a>
            </div>
    </div>
  );
};

export default Home;