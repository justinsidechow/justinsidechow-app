import "./Page.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <img
          className="main-image-home"
          alt="home-background"
          src={process.env.PUBLIC_URL + "/Photo/home-background.jpg"}
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
    </div>
  );
};

export default HomePage;
