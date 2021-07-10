import "./HomePage.css";

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
        Creating the future <br></br>
        0ne line at a time <br></br>
      </div>
    </div>
  );
};

export default HomePage;
