const YoutubePage = () => {
  return (
    <div className="container">
      <div className="page-heading">
        <div className="page-title">Youtube</div>
        <div className="page-mission">
          A Moment Recorded, Experience Shared, Connected
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
            Timeframe: May 2021 - July 2021 <div className="red">FINISHED</div>
            <br></br> <br></br>
            This website is the hub for all my projects where a visiter can
            easily and quickly view while understanding the purpose and
            inspirations of those creations. This project was also to showcase
            my front/back-end software engineering skills by using the
            programming languages posted above. Following best practices while
            creating a portfolio website was fun and adventurous experience.
            Learning the pros and cons of React showed me React is perfect for a
            portfolio website as it is easy to develope and reacts to state
            changes efficiently. Also, using Typescript and not Javascript is
            safer for a first timer in website building as it dicourages type
            errors. The Navbar logic was done in Typescript/React and the
            website's responsiviness was handled by CSS. This website will be a
            continous project as my other projects continue.
          </div>
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
        src={process.env.PUBLIC_URL + "/Photo/computer-background.JPG"}
      ></img>
    </div>
  );
};

export default YoutubePage;
