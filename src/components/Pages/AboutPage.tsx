import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <div className="container">
        <img
          className="main-image"
          src={process.env.PUBLIC_URL + "/Photo/computer_background.JPG"}
        ></img>
        <div className="page-mission">
          <div className="page-title">About</div>
          Programming the future
          <br></br>
          One line at a time
          <div className="column-section">
            <div className="column-left">1</div>
            <div className="column-right">2</div>
          </div>
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

export default AboutPage;
