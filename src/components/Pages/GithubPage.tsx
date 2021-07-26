import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const GithubPage = () => {
  return (
    <div className="container">
      <div className="page-heading">
        <div className="page-title">Github</div>
        <div className="page-mission">
          Code Repository of the Past, Present, and Future
        </div>
      </div>
      <div className="column-section">
        <div className="column-center">
          <img
            className="column-link-logo"
            src={process.env.PUBLIC_URL + "/Logo/justinsidechow-logo.png"}
          />
          <div className="column-text">
            Justinsidechow-app (This website!)
            <br></br>
            <br></br>
            <div>
              Repository: <div className="red">PRIVATE</div>
            </div>
            <br></br>
            Language used: Typescript/React/NodeJS/HTML/CSS
            <br></br>
            Platform used: AWS (Lightsail/Route53), Visual Studio Code
            <br></br> <br></br>
            Timeframe: May 2021 - July 2021
            <br></br> <br></br>
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
            what I learned is applicable to the real world. The future looks
            promising and I am working toward that future.
          </div>
        </div>
      </div>
      <div className="column-section">
        <div className="column-center">
          <div className="column-text">
            Hello World! My name is Justin Man Hon Chow!
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
            what I learned is applicable to the real world. The future looks
            promising and I am working toward that future.
            <br></br>
            <br></br>
            Thanks for reading about me and check out my creative projects
            below!
          </div>
        </div>
      </div>
      <div className="column-section">
        <a className="column-link" href="https://github.com/justinsidechow">
          <img
            className="column-link-logo"
            src={process.env.PUBLIC_URL + "/Logo/github-icon.png"}
          />
          {"github.com/justinsidechow"}
        </a>
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
