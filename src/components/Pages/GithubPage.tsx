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
            alt="justinsidechow-logo"
            src={process.env.PUBLIC_URL + "/Logo/justinsidechow-logo.png"}
          />
          <div className="column-text">
            JustinsideChow (This website!)
            <br></br>
            <br></br>
            <div>
              <b>Repository:</b> <div className="green">PUBLIC</div>
            </div>
            <br></br>
            <b>Languages used:</b> Typescript / React / NodeJS / HTML / CSS
            <br></br>
            <b>Platforms used:</b> AWS (Lightsail/Route53), Visual Studio Code
            <br></br> <br></br>
            <b>Timeframe:</b> May 2021 - July 2021{" "}
            <div className="green">FINISHED</div>
            <br></br> <br></br>
            This website is the hub for all my projects where visiters can
            easily understand the purpose and inspirations of those creations.
            This project was also to showcase my front/back-end software
            engineering skills by using the programming languages posted above.
            Following best practices while creating a portfolio website was a
            fun and adventurous experience as everything was written from
            scratch. Learning the pros and cons of React showed me React is
            perfect for a portfolio website with its asynchronous UI states.
            Also, using Typescript and not Javascript is safer for a first timer
            in website building as it dicourages type errors where it would
            cause problems in the future. The Navbar logic was done in
            Typescript/React and the website's responsiviness was handled by
            CSS. This website will be a continous project as my projects
            increase and old projects get updated.
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
              <b>Repository:</b> <div className="green">PUBLIC</div>
            </div>
            <br></br>
            <b>Languages used:</b> Python
            <br></br>
            <b>Platforms used:</b> Jupyter Notebook
            <br></br> <br></br>
            <b>Timeframe:</b> April 2021 - May 2021, August 2021 -{" "}
            <div className="green">NOW</div>
            <br></br> <br></br>
            Image-Scraper was created to scrape images from opensea.io to train
            my NFT-ML program through Pytorch DCGAN. After the training and end
            product is made, it is then sold to the NFT market. The product will
            also contain the source code which train the network within the NFT
            package. This project is still on going and at its infancy. There is
            still much to be learn and done. Any advice to this project would be
            greatly appreciated.
          </div>
        </div>
      </div>
      <div className="column-section">
        <a className="column-link" href="https://github.com/justinsidechow">
          <img
            className="column-link-logo"
            alt="github-icon"
            src={process.env.PUBLIC_URL + "/Logo/github-icon.png"}
          />
          {"github.com/justinsidechow"}
        </a>
      </div>
      <img
        className="main-image"
        alt="github-background"
        src={process.env.PUBLIC_URL + "/Photo/github-background.jpg"}
      ></img>
    </div>
  );
};

export default GithubPage;
