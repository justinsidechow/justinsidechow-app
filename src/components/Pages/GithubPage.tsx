import {
  Typography,
  Box,
  Container,
  Grid,
  CardMedia,
  Button,
} from "@mui/material";
import "./Page.css";

const DesktopBackgroundSX = {
  display: { xs: "none", md: "flex" },
  bgcolor: "#282828",
  height: "220vh",
  width: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: `url(${
    process.env.PUBLIC_URL + "/Photo/github-background.jpg"
  })`,
  alighItems: "center",
  justifyContent: "center",
  direction: "column",
};

const gridSX = {
  direction: "column",
  justifyContent: "center",
  alignItems: "center",
};

const titleGridSX = {
  alighItems: "center",
  justifyContent: "center",
  direction: "column",
};

const titleSX = {
  fontSize: "7em",
  textShadow: "3px 3px 5px black",
  fontWeight: "bolder",
  color: "white",
};

const titleMissionSX = {
  fontSize: "2em",
  textShadow: "2px 2px 3px black",
  color: "white",
};

const columnTextSX = {
  color: "white",
  opacity: "1.0",
  backgroundColor: "rgba(0, 0, 0, .8)",
  padding: "2em",
  borderRadius: "10px",
};

const columnTextLastSX = {
  color: "white",
  opacity: "1.0",
  backgroundColor: "rgba(0, 0, 0, .8)",
  marginBottom: "2em",
  padding: "2em",
  borderRadius: "10px",
};

const githubButtonSX = {
  textTransform: "none",
  fontFamily: "monospace",
  fontSize: "1em",
  color: "inherit",
  transition: "100ms",
  textDecoration: "none",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#2688ad",
  "&:hover": {
    backgroundColor: "#2688ad",
    color: "#FFFFFF",
    textShadow: "0 0 3px #FFFFFF",
    transform: "translate3d(0px, -5px, 0px)",
  },
};

const iconSX = {
  height: "3em",
  width: "3em",
  margin: "auto",
};

const githubTitleSX = {
  fontSize: "1.5em",
  fontWeight: "bold",
};

const mobileBackgroundSX = {
  display: { xs: "flex", md: "none" },
  bgcolor: "#282828",
  height: "100%",
  width: "100%",
  padding: "auto",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: `url(${
    process.env.PUBLIC_URL + "/Photo/github-background.jpg"
  })`,
};

const mobileTitleSX = {
  fontSize: "6em",
  textShadow: "3px 3px 5px black",
  fontWeight: "bolder",
  color: "white",
  margin: "auto",
  marginTop: "0.25em",
};

const mobileColumnTextSX = {
  color: "white",
  opacity: "1.0",
  backgroundColor: "rgba(0, 0, 0, .8)",
  padding: "2em",
  borderRadius: "10px",
  marginBottom: "2em",
};

const mobileTitleMissionSX = {
  fontSize: "2em",
  textShadow: "2px 2px 3px black",
  color: "white",
  margin: "1em",
};

function GithubPage() {
  return (
    <div>
      <Box sx={DesktopBackgroundSX}>
        <Grid container sx={gridSX}>
          <Grid item xs={12} sx={titleGridSX}>
            <Typography sx={titleSX}>Github</Typography>
            <Typography sx={titleMissionSX}>
              Code Repository of the Past, Present, and Future
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Typography sx={columnTextSX}>
                <CardMedia
                  component="img"
                  image={process.env.PUBLIC_URL + "/Logo/dice_logo.ico"}
                  title="dice"
                  sx={iconSX}
                />
                <br />
                <Typography sx={githubTitleSX}>Luckerdogs</Typography>
                <br />
                <div>
                  <b>Repository:</b> <div className="green">PUBLIC</div>
                </div>
                <br />
                <b>Languages/Framework/Tools used:</b> Python / Django /
                Postgresql / Docker / Nginx / Certbot / LetsEncrypt / Google
                SMTP / AWS Lightsail / Javascript / React / Redux / Material-UI
                / Axios / JSON / HTML / CSS
                <br />
                <br />
                <b>Timeframe:</b> May 2021 - May 2022{" "}
                <div className="green">FINISHED</div>
                <br />
                <br />
                A website to simulate real life events with the odds and video
                animations presented to put those numbers into perspective. It
                is difficult to make decisions statistically if one is not used
                to using such methods. Especially on decisions that require
                quick calculations. Therefore, this website is meant to help
                people visualize those statistical choices with a trial and
                error "gambling" effect to entice them to make better
                statistical choices with how often they get their guesses wrong
                on certain tasks. Coin Toss would be the first visualization
                simulation as it is an easy example to understand. More game
                simulations to come in the future as the project grows.
                <br />
                <br />
                Thanks for reading about me and check out my projects on github!
                <br />
                <br />
                <Button
                  href="https://github.com/justinsidechow/luckerdogs"
                  key={"luckerdogs"}
                  sx={githubButtonSX}
                >
                  Luckerdogs
                </Button>
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Typography sx={columnTextSX}>
                <CardMedia
                  component="img"
                  image={
                    process.env.PUBLIC_URL + "/Logo/justinsidechow-logo.png"
                  }
                  title="justinsidechow"
                  sx={iconSX}
                />
                <br />
                <Typography sx={githubTitleSX}>
                  JustinsideChow (This website!)
                </Typography>
                <br />
                <div>
                  <b>Repository:</b> <div className="green">PUBLIC</div>
                </div>
                <br />
                <b>Languages/Framework/Tools used:</b> Typescript / React /
                Redux / Material-UI / NodeJS / HTML / CSS / Docker / Nginx /
                Certbot / AWS (Lightsail/Route53)
                <br />
                <br />
                <b>Timeframe:</b> May 2021 - July 2021{" "}
                <div className="green">FINISHED</div>
                <br /> Updated: June 2022
                <br />
                <br />
                This website is the hub for all my projects where visiters can
                easily understand the purpose and inspirations of those
                creations. This project was also to showcase my front/back-end
                software engineering skills by using the programming languages
                posted above. Following best practices while creating a
                portfolio website was a fun and adventurous experience as
                everything was written from scratch. Learning the pros and cons
                of React showed me React is perfect for a portfolio website with
                its asynchronous UI states. Also, using Typescript and not
                Javascript is safer for a first timer in website building as it
                dicourages type errors where it would cause problems in the
                future. The Navbar logic was done in Typescript/React and the
                website's responsiviness was handled by CSS. This website will
                be a continous project as my projects increase and old projects
                get updated.
                <br />
                <br />
                Thanks for reading about me and check out my projects on github!
                <br />
                <br />
                <Button
                  href="https://github.com/justinsidechow/justinsidechow-app"
                  key={"justinsidechow-app"}
                  sx={githubButtonSX}
                >
                  Justinsidechow-app
                </Button>
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Typography sx={columnTextLastSX}>
                <Typography sx={githubTitleSX}>Image-Scraper</Typography>
                <br />
                <div>
                  <b>Repository:</b> <div className="green">PUBLIC</div>
                </div>
                <br />
                <b>Languages/Framework/Tools used: </b> Python / PyTorch / NumPy
                / Jupyter Notebook
                <br />
                <br />
                <b>Timeframe:</b> April 2021 - May 2021{" "}
                <div className="green">FINISHED</div>
                <br />
                <br />
                Image-Scraper was created to scrape images from opensea.io to
                train my NFT-ML program through Pytorch DCGAN. After the
                training and end product is made, it is then sold to the NFT
                market. The product will also contain the source code which
                train the network within the NFT package. This project is still
                on going and at its infancy. There is still much to be learn and
                done. Any advice to this project would be greatly appreciated.
                <br />
                <br />
                Thanks for reading about me and check out my projects on github!
                <br />
                <br />
                <Button
                  href="https://github.com/justinsidechow/Image-Scraper"
                  key={"Image-Scrapper"}
                  sx={githubButtonSX}
                >
                  Image-Scraper
                </Button>
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Box sx={mobileBackgroundSX}>
        <Grid container sx={gridSX}>
          <Grid item xs={12} sx={titleGridSX}>
            <Typography sx={mobileTitleSX}>Github</Typography>
            <Typography sx={mobileTitleMissionSX}>
              Code Repository of the Past, Present, and Future
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Typography sx={mobileColumnTextSX}>
                <CardMedia
                  component="img"
                  image={process.env.PUBLIC_URL + "/Logo/dice_logo.ico"}
                  title="dice"
                  sx={iconSX}
                />
                <br />
                <Typography sx={githubTitleSX}>Luckerdogs</Typography>
                <br />
                <div>
                  <b>Repository:</b> <div className="green">PUBLIC</div>
                </div>
                <br />
                <b>Languages/Framework/Tools used:</b> Python / Django /
                Postgresql / Docker / Nginx / Certbot / LetsEncrypt / Google
                SMTP / AWS Lightsail / Javascript / React / Redux / Material-UI
                / Axios / JSON / HTML / CSS
                <br />
                <br />
                <b>Timeframe:</b> May 2021 - May 2022{" "}
                <div className="green">FINISHED</div>
                <br />
                <br />
                A website to simulate real life events with the odds and video
                animations presented to put those numbers into perspective. It
                is difficult to make decisions statistically if one is not used
                to using such methods. Especially on decisions that require
                quick calculations. Therefore, this website is meant to help
                people visualize those statistical choices with a trial and
                error "gambling" effect to entice them to make better
                statistical choices with how often they get their guesses wrong
                on certain tasks. Coin Toss would be the first visualization
                simulation as it is an easy example to understand. More game
                simulations to come in the future as the project grows.
                <br />
                <br />
                Thanks for reading about me and check out my projects on github!
                <br />
                <br />
                <Button
                  href="https://github.com/justinsidechow/luckerdogs"
                  key={"luckerdogs"}
                  sx={githubButtonSX}
                >
                  Luckerdogs
                </Button>
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Typography sx={mobileColumnTextSX}>
                <CardMedia
                  component="img"
                  image={
                    process.env.PUBLIC_URL + "/Logo/justinsidechow-logo.png"
                  }
                  title="justinsidechow"
                  sx={iconSX}
                />
                <br />
                <Typography sx={githubTitleSX}>
                  JustinsideChow (This website!)
                </Typography>
                <br />
                <div>
                  <b>Repository:</b> <div className="green">PUBLIC</div>
                </div>
                <br />
                <b>Languages/Framework/Tools used:</b> Typescript / React /
                Redux / Material-UI / NodeJS / HTML / CSS / Docker / Nginx /
                Certbot / AWS (Lightsail/Route53)
                <br />
                <br />
                <b>Timeframe:</b> May 2021 - July 2021{" "}
                <div className="green">FINISHED</div>
                <br /> Updated: June 2022
                <br />
                <br />
                This website is the hub for all my projects where visiters can
                easily understand the purpose and inspirations of those
                creations. This project was also to showcase my front/back-end
                software engineering skills by using the programming languages
                posted above. Following best practices while creating a
                portfolio website was a fun and adventurous experience as
                everything was written from scratch. Learning the pros and cons
                of React showed me React is perfect for a portfolio website with
                its asynchronous UI states. Also, using Typescript and not
                Javascript is safer for a first timer in website building as it
                dicourages type errors where it would cause problems in the
                future. The Navbar logic was done in Typescript/React and the
                website's responsiviness was handled by CSS. This website will
                be a continous project as my projects increase and old projects
                get updated.
                <br />
                <br />
                Thanks for reading about me and check out my projects on github!
                <br />
                <br />
                <Button
                  href="https://github.com/justinsidechow/justinsidechow-app"
                  key={"justinsidechow-app"}
                  sx={githubButtonSX}
                >
                  Justinsidechow-app
                </Button>
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Typography sx={columnTextLastSX}>
                <Typography sx={githubTitleSX}>Image-Scraper</Typography>
                <br />
                <div>
                  <b>Repository:</b> <div className="green">PUBLIC</div>
                </div>
                <br />
                <b>Languages/Framework/Tools used: </b> Python / PyTorch / NumPy
                / Jupyter Notebook
                <br />
                <br />
                <b>Timeframe:</b> April 2021 - May 2021{" "}
                <div className="green">FINISHED</div>
                <br />
                <br />
                Image-Scraper was created to scrape images from opensea.io to
                train my NFT-ML program through Pytorch DCGAN. After the
                training and end product is made, it is then sold to the NFT
                market. The product will also contain the source code which
                train the network within the NFT package. This project is still
                on going and at its infancy. There is still much to be learn and
                done. Any advice to this project would be greatly appreciated.
                <br />
                <br />
                Thanks for reading about me and check out my projects on github!
                <br />
                <br />
                <Button
                  href="https://github.com/justinsidechow/Image-Scraper"
                  key={"Image-Scrapper"}
                  sx={githubButtonSX}
                >
                  Image-Scraper
                </Button>
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default GithubPage;
