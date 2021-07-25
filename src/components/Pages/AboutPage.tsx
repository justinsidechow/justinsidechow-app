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
          Just-in-side Chow
          <br></br>
          The Joy in Discovery
          <div className="column-section">
            <div className="column-left">
              <img
                className="about-portrait"
                src={process.env.PUBLIC_URL + "/Photo/justin-chow-portrait.jpg"}
              ></img>
            </div>
            <div className="column-right">
              <div className="column-text">
                Hello World! My name is Justin Chow!
                <br></br>
                <br></br>
                Hello World! My name is Justin Chow!
                <br></br>
                <br></br>
                Hello World! My name is Justin Chow!
                <br></br>
                <br></br>
                Hello World! My name is Justin Chow!
                <br></br>
                <br></br>
                Hello World! My name is Justin Chow!
                <br></br>
                <br></br>
                Hello World! My name is Justin Chow!
                <br></br>
                <br></br>
                Hello World! My name is Justin Chow!
                <br></br>
                <br></br>
                Hello World! My name is Justin Chow!
                <br></br>
                <br></br>
                Hello World! My name is Justin Chow!
                <br></br>
                <br></br>
              </div>
            </div>
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
