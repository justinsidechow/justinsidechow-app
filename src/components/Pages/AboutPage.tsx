import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="container">
      <div className="page-heading">
        <div className="page-title">About</div>
        <div className="page-mission">
          Just-in-side Chow
          <br></br>
          The Joy in Discovery
        </div>
      </div>
      <div className="column-section">
        <div className="column-left">
          <img
            className="about-portrait"
            src={process.env.PUBLIC_URL + "/Photo/justin-chow-portrait.jpg"}
          ></img>
        </div>
        <div className="column-right">
          <div className="column-text">
            Hello World! My name is Man Hon Chow (Justin)!
            <br></br>
            <br></br>I am a recent graduate from California State University of
            California (CSULA) of Fall 2020 with B.S in Computer Science and
            currently looking for a Software Engineer job.
            <br></br>
            <br></br>
            The joy in discovery, learning, and creating is my motivation to
            wake up in the morning. Everyday is a day to strive toward the dream
            of financial independence to earn the time to creating whatever
            comes to my mind without restriction. Currently programming is my
            main focus and the most scalable solution toward financial
            independence and the expression of creativity. However, I do enjoy
            playing video games and stream online in my off time to relax and
            interact with other gamers. Video gaming is the biggest
            entertainment industry and retiring while doing video game streaming
            would be my end goal. The Mausoleum Clothing is my own personal drop
            shipping clothing brand where I also express and test out my
            creative and business knowledge. Unit testing my knowledge to see if
            what I learned is actually applicable to the real world.
            <br></br>
            <br></br>
            Thanks for reading about me and check out my creative projects
            below!
          </div>
        </div>
      </div>
      <div className="column-section">
        <Link className="column-link-4" to="/github">
          Github
        </Link>
        <Link className="column-link-4" to="/twitch">
          Twitch.tv
        </Link>
        <Link className="column-link-4" to="/youtube">
          Youtube
        </Link>
        <Link className="column-link-4" to="/mausoleum">
          Mausoleum
        </Link>
      </div>
      {/*
      <img
        className="page-background-image"
        src={process.env.PUBLIC_URL + "/Photo/computer_background.JPG"}
      ></img>
       */}
      <img
        className="main-image"
        src={process.env.PUBLIC_URL + "/Photo/computer_background.JPG"}
      ></img>
    </div>
  );
};

export default AboutPage;
