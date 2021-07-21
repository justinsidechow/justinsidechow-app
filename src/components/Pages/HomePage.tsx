import "./Page.css";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <img
          className="home-page-main-image"
          src={process.env.PUBLIC_URL + "/Photo/place-holder-home-page.JPG"}
        ></img>
        <div className="home-page-mission">
          Programming the future <br></br>
          One line at a time <br></br>
          <Link className="learn-more-button" to="/about">
            Learn More Here
          </Link>
        </div>
      </div>
      {/*
      <img
        className="page-background-image"
        src={process.env.PUBLIC_URL + "/Photo/computer_background.JPG"}
      ></img>
       */}
    </div>
  );
};

export default HomePage;
