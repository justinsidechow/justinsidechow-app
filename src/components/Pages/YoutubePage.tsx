import PropTypes from "prop-types";

const YoutubePage = () => {
  return (
    <div className="container">
      <div className="page-heading">
        <div className="page-title">Youtube</div>
        <div className="page-mission">
          A Moment Recorded, Experience Shared, Connected
        </div>
      </div>
      <div className="column-section-twitch">
        <div className="column-center-twitch">
          <div>
            <iframe
              className="video-responsive"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wLaSWxHa4P4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="column-section">
        <div className="column-center">
          <div className="column-text">
            In the business of connecting with the viewers, memoriable branding
            and genuine interaction is king.
            <br></br>
            <br></br>
            "Booty is love, Booty is life" may be a silly and childish slogan to
            go by, however it rolls off the tongue nicely. These lines were
            never meant to be serious as it showcases the mood for the channel,
            which is a fun and relaxing place to watch video game content while
            making silly jokes about booties. Therefore, viewers would not feel
            intimidated to interact with me and hopefully engage in the chat. On
            a more serious note, in the slogan is how it would be welcoming for
            everyone no matter the racial or sexual differences as everyone have
            a booty. There is more to just showcase video gaming in streaming as
            making a connection and improving the mood of the viewer with the
            content is top priority. Life can be drooling, harsh, and exhasting.
            Sometimes, all we need a moment to relax and just enjoy some video
            gaming with others.
            <br></br>
            <br></br>
            Chat with me above or check me out on twitch.tv below!
          </div>
        </div>
      </div>
      <div className="column-section">
        <a
          className="column-link"
          href="https://https://www.youtube.com/channel/UCQ1fJzVpKueH3K3qRDIjgVg"
        >
          <img
            className="column-link-logo"
            src={process.env.PUBLIC_URL + "/Logo/youtube-icon.png"}
          />
          {"youtube.com"}
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
        src={process.env.PUBLIC_URL + "/Photo/computer-background.JPG"}
      ></img>
    </div>
  );
};

/*
YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};
*/

export default YoutubePage;
