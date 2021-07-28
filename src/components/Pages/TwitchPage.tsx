import {
  TwitchEmbed,
  TwitchChat,
  TwitchClip,
  TwitchPlayer,
} from "react-twitch-embed";

import { Component } from "react";

class TwitchPage extends Component {
  state = {
    width: 0,
    height: 0,
  };

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth - 300,
      height: window.innerHeight,
    });
  };

  componentDidMount() {
    window.addEventListener("load", this.updateDimensions);
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("load", this.updateDimensions);
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div className="container">
        <div className="page-heading">
          <div className="page-title">Twitch</div>
          <div className="page-mission">
            Code Repository of the Past, Present, and Future
          </div>
        </div>
        <div className="column-section-twitch">
          <div className="column-center-twitch">
            <TwitchEmbed
              channel="JBOOTY"
              id="moonstar_x"
              theme="dark"
              width={String(this.state.width) + "px"}
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
              Image-Scraper was created to scrape images from opensea.io to
              train my NFT-ML through Pytorch DCGAN. After the training and end
              product is made, it is sold to the NFT market. The product will
              also contain the source code which train the network within the
              NFT package. This project is still on going and at its infancy.
              There is still much to be learn and done. Any advice to this
              project would be greatly appreciated.
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
