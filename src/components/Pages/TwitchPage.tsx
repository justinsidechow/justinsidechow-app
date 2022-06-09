import { Component } from "react";

class TwitchPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-heading">
          <div className="page-title">Twitch</div>
          <div className="page-mission">In the Moment, In the Game</div>
        </div>
        <div className="column-section-twitch">
          <div className="column-center-twitch">
          </div>
        </div>
        <div className="column-section">
          <div className="column-center">
            <div className="column-text">
              In the business of connecting with the viewers, memoriable
              branding and genuine interaction is king.
              <br></br>
              <br></br>
              Connecting with the viewers and making them feel connected is as
              important as the skills required to play the game effectively. The
              viewer's time are important and valuable. Using empathy and
              conversing similar topic would help the viewer to be at ease.
              Especially if the viewer plays the same game I am streaming.
              Therefore, viewers would not feel intimidated to interact with me
              and hopefully engage in the chat. Life can be drooling, harsh, and
              exhasting. Sometimes, all we need a moment to relax and just enjoy
              some video gaming with others.
              <br></br>
              <br></br>
              Chat with me above or check me out on twitch.tv below!
            </div>
          </div>
        </div>
        <div className="column-section">
          <a className="column-link" href="https://twitch.tv/jbooty">
            <img
              className="column-link-logo"
              alt="twitch-icon"
              src={process.env.PUBLIC_URL + "/Logo/twitch-icon.png"}
            />
            {"twitch.tv/JBOOTY"}
          </a>
        </div>
        <img
          className="main-image"
          alt="twitch-background"
          src={process.env.PUBLIC_URL + "/Photo/twitch-background.jpg"}
        ></img>
      </div>
    );
  }
}

export default TwitchPage;
