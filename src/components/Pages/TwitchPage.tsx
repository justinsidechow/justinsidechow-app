import {
  TwitchEmbed,
  TwitchChat,
  TwitchClip,
  TwitchPlayer,
} from "react-twitch-embed";

import { Component } from "react";

class TwitchPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-heading">
          <div className="page-title">Twitch</div>
          <div className="page-mission">Booty is love, Booty is life.</div>
        </div>
        <div className="column-section-twitch">
          <div className="column-center-twitch">
            <TwitchEmbed
              className="twitch-video"
              channel="JBOOTY"
              id="twitch-embed"
              theme="dark"
              width="90vw"
              height="90vh"
              muted
              onVideoPause={() => console.log(":(")}
            />
          </div>
        </div>
        <div className="column-section">
          <div className="column-center">
            <div className="column-text">
              In the business of connecting with the viewers, memoriable
              branding and genuine interaction is king.
              <br></br>
              <br></br>
              "Booty is love, Booty is life" may be a silly and childish slogan
              to go by, however it rolls off the tongue nicely. These lines were
              never meant to be serious as it showcases the mood for the
              channel, which is a fun and relaxing place to watch video game
              content while making silly jokes about booties. Therefore, viewers
              would not feel intimidated to interact with me and hopefully
              engage in the chat. On a more serious note, in the slogan is how
              it would be welcoming for everyone no matter the racial or sexual
              differences as everyone have a booty. There is more to just
              showcase video gaming in streaming as making a connection and
              improving the mood of the viewer with the content is top priority.
              Life can be drooling, harsh, and exhasting. Sometimes, all we need
              a moment to relax and just enjoy some video gaming with others.
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
              src={process.env.PUBLIC_URL + "/Logo/twitch-icon.png"}
            />
            {"twitch.tv/JBOOTY"}
          </a>
        </div>
        <img
          className="main-image"
          src={process.env.PUBLIC_URL + "/Photo/twitch-background.jpg"}
        ></img>
      </div>
    );
  }
}

/* 
const TwitchPage = () => {
  return (
    <div className="container">
      <div className="page-heading">
        <div className="page-title">Twitch</div>
        <div className="page-mission">
          Code Repository of the Past, Present, and Future
        </div>
      </div>
      <div className="column-section">
        <div className="column-center-twitch">
          {" "}
          <TwitchEmbed
            channel="JBOOTY"
            id="moonstar_x"
            theme="dark"
            muted
            onVideoPause={() => console.log(":(")}
          />
        </div>
      </div>
      <div className="column-section">
        <div className="column-center">
          <div className="column-text">
            Image-Scraper/NFT-ML
            <br></br>
            <br></br>
            <div>
              Repository: <div className="green">PUBLIC</div>
            </div>
            <br></br>
            Language used: Python
            <br></br>
            Platform used: Jupyter Notebook, Nvidia CUDA 11.0,
            <br></br> <br></br>
            Timeframe: April 2021 - May 2021, August 2021 -{" "}
            <div className="green">NOW</div>
            <br></br> <br></br>
            Image-Scraper was created to scrape images from opensea.io to train
            my NFT-ML through Pytorch DCGAN. After the training and end product
            is made, it is sold to the NFT market. The product will also contain
            the source code which train the network within the NFT package. This
            project is still on going and at its infancy. There is still much to
            be learn and done. Any advice to this project would be greatly
            appreciated.
          </div>
        </div>
      </div>
      <div className="column-section">
        <a className="column-link" href="https://twitch.tv/jbooty">
          <img
            className="column-link-logo"
            src={process.env.PUBLIC_URL + "/Logo/twitch-icon.png"}
          />
          {"twitch.tv/JBOOTY"}
        </a>
      </div>
      <img
        className="main-image"
        src={process.env.PUBLIC_URL + "/Photo/computer_background.JPG"}
      ></img>
    </div>
  );
};
*/

export default TwitchPage;
