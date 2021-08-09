const MausoleumPage = () => {
  return (
    <div className="container">
      <div className="page-heading">
        <div className="page-title">Mausoleum Clothing</div>
        <div className="page-mission">Express Your Emotions</div>
      </div>
      <div className="column-section-mausoleum">
        <a
          className="column-link-mausoleum"
          href="https://mausoleumclothing.com/pages/hugs-melting-in-the-moment"
        >
          <img
            className="column-3"
            src={process.env.PUBLIC_URL + "/Photo/hugs-shirt.jpg"}
          ></img>
        </a>
        <a
          className="column-link-mausoleum"
          href="https://mausoleumclothing.com/pages/cherry-loss-of-innocence"
        >
          <img
            className="column-3"
            src={process.env.PUBLIC_URL + "/Photo/cherry-shirt.jpg"}
          ></img>
        </a>
        <a
          className="column-link-mausoleum"
          href="https://mausoleumclothing.com/pages/eye-creativity"
        >
          <img
            className="column-3"
            src={process.env.PUBLIC_URL + "/Photo/EYE-shirt.jpg"}
          ></img>
        </a>
      </div>

      <div className="column-section">
        <div className="column-center">
          <div className="column-text">
            Every piece represents an emotion we all share. By being sincere
            with our emotions and connecting with another, we are never truly
            alone on this limitless journey into the unknown. The Mausoleum
            represents our buried emotions we never got to fully express.
            <br></br>
            <br></br>
            This clothing brand is the culmination of my lessons learned in the
            storybrand framework. A dropshipping brand where the risk of failure
            would not cost a lot but the lessons learned in business and
            marketing would be invaluable for the future. This brand is the
            guide for people's inability to express their emotions truthfully
            due to societal influences. The purpose of the story is the first
            step for them to recognize their emotions through the power of story
            telling. By understanding their own emotions can one start the
            journey to express and learn from it. Maybe then, they will
            genuinelly improve their lives by solving those unrealized and
            unsolved emotions. The first step will always be the hardest and it
            never hurts to have a little push from each other.
            <br></br>
            <br></br>
            Check out the shirt's story by clicking on the shirt images or my
            clothing brand website below!
          </div>
        </div>
      </div>
      <div className="column-section">
        <a className="column-link" href="https://mausoleumclothing.com/">
          <img
            className="column-link-logo"
            src={process.env.PUBLIC_URL + "/Logo/clothing-icon.png"}
          />
          {"mausoleumclothing.com"}
        </a>
      </div>
      {/*
    <img
      className="page-background-image"
      src={process.env.PUBLIC_URL + "/Photo/computer_background.JPG"}
    ></img>
     */}
      <img
        className="main-image-mausoleum"
        src={process.env.PUBLIC_URL + "/Photo/mausoleum-background.JPG"}
      ></img>
    </div>
  );
};

export default MausoleumPage;
