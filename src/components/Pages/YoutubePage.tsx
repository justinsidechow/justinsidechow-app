import { useForm } from "react-hook-form";

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
            The scalability and distribution of digital content is the printing
            press of our generation and beyond.
            <br></br>
            <br></br>
            It is one thing to create content and another to distribute it
            effectively for the limitless future. The content created has value
            to those who saw it live and maybe even more so by those who were
            not able to. Youtube is the perfect platform to archive contents
            that are attention grabbing enough for more traffic toward one's
            digital brand. Any twitch content recorded worth making into a video
            should be posted on youtube to maximize the value of the content.
            The hardest problem is to generate enough content for that one good
            minute of gameplay to post onto youtube. Second is the creative
            direction which grabs hold onto Youtube's algorithm to recommend to
            other's top recommend. Third is repeating those two steps till the
            videos are integrated into viewer's general habit of Youtube
            viewing. All in all, Youtube is another platform to further my goal
            toward my financial independence. All of this is still a learning
            process so more will change and improve in the future.
            <br></br>
            <br></br>
            Check me out the first video I've ever made on gaming above or my
            channel below!
          </div>
        </div>
      </div>
      <div className="column-section">
        <a
          className="column-link"
          href="https://www.youtube.com/channel/UCQ1fJzVpKueH3K3qRDIjgVg"
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
        src={process.env.PUBLIC_URL + "/Photo/youtube-background.JPG"}
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
