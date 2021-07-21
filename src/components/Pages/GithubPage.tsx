import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const GithubPage = () => {
  return (
    <div>
      <div className="container">
        <img
          className="main-image"
          src={process.env.PUBLIC_URL + "/Photo/computer_background.JPG"}
        ></img>
        <div className="home-page-mission">
          <div className="home-page-full-name">Justin Chow</div>
          Programming the future
          <br></br>
          One line at a time
          <br></br>
          <br></br>
          <Link className="learn-more-button" to="/about">
            Learn more here
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

export default GithubPage;
