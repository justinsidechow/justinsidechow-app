import "./Page.css";

const HomePage = () => {
  return (
    <div className="container">
      <img
        className="home-page-main-image"
        src={
          process.env.PUBLIC_URL + "/Photo/place-holder-home-page-cropped.JPG"
        }
      ></img>
      <div className="home-page-mission">
        Programming the future <br></br>
        One line at a time <br></br>
        <a href="/about">
          <button className="learn-more-button">Learn More Here</button>
        </a>
      </div>
      <div>this is an example</div>
    </div>
  );
};

export default HomePage;
