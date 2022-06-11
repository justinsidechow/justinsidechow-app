import { Typography, Box, Container, Grid, CardMedia } from "@mui/material";

const DesktopBackgroundSX = {
  display: { xs: "none", md: "flex" },
  bgcolor: "#282828",
  height: "115vh",
  width: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: `url(${
    process.env.PUBLIC_URL + "/Photo/about-background.jpg"
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

const portriatSX = {
  display: { xs: "none", md: "flex" },
  height: "30vw",
  width: "30vw",
  borderRadius: "50%",
  margin: "auto",
};

const columnTextSX = {
  color: "white",
  opacity: "1.0",
  backgroundColor: "rgba(0, 0, 0, .8)",
  marginRight: "2em",
  padding: "2em",
  borderRadius: "10px",
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
    process.env.PUBLIC_URL + "/Photo/about-background.jpg"
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

const mobileTitleMissionSX = {
  fontSize: "2em",
  textShadow: "2px 2px 3px black",
  color: "white",
};

const mobileColumnTextSX = {
  color: "white",
  opacity: "1.0",
  backgroundColor: "rgba(0, 0, 0, .8)",
  margin: "auto",
  padding: "2em",
  borderRadius: "10px",
  marginBottom: "2em",
};

const mobilePortriatSX = {
  height: "90vw",
  width: "90vw",
  borderRadius: "50%",
  margin: "auto",
  my: "2em",
  padding: "2em",
};

function AboutPage() {
  return (
    <div>
      <Box sx={DesktopBackgroundSX}>
        <Grid container sx={gridSX}>
          <Grid item xs={12} sx={titleGridSX}>
            <Typography sx={titleSX}>About</Typography>
            <Typography sx={titleMissionSX}>Just-in-side Chow</Typography>
          </Grid>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              sx={portriatSX}
              image={process.env.PUBLIC_URL + "/Photo/justin-chow-portrait.jpg"}
              title="portrait"
            />
          </Grid>
          <Grid item xs={6}>
            <Container>
              <Typography sx={columnTextSX}>
                Hello World! My name is Justin Chow!
                <br />
                <br />
                I am a recent graduate from California State University of
                California (CSULA) of Fall 2020 with B.S in Computer Science and
                currently looking for a Software Engineer job.
                <br />
                <br />
                The joy in discovery, learning, and creating is my motivation to
                wake up in the morning. Everyday to strive toward the dream of
                financial independence which provides the time to creating
                whatever comes to my mind without restriction. Programming is my
                main focus and the most scalable solution toward financial
                independence and the expression of my creativity. However, I do
                enjoy playing video games and stream online in my off time to
                relax and interact with other gamers. Video gaming is the
                biggest entertainment industry which allow streaming to becoming
                a more viable career as the value of the industry continue to
                grow. The content created from streaming then turn into
                entertaining videos for Youtube to generate more traffic and
                branding.The Mausoleum Clothing is my own personal drop shipping
                clothing brand where I express and test out my creative and
                business knowledge. Unit testing my knowledge to see if what I
                learned is applicable to the real world. There is no real
                progress without trying, learning, and applying.
                <br />
                <br />
                Thanks for reading about me and check out my projects on github!
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Box sx={mobileBackgroundSX}>
        <Grid container sx={gridSX}>
          <Grid item xs={12} sx={titleGridSX}>
            <Typography sx={mobileTitleSX}>About</Typography>
            <Typography sx={mobileTitleMissionSX}>Just-in-side Chow</Typography>
          </Grid>
          <Grid item xs={12}>
            <CardMedia
              component="img"
              sx={mobilePortriatSX}
              image={process.env.PUBLIC_URL + "/Photo/justin-chow-portrait.jpg"}
              title="portrait"
            />
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Typography sx={mobileColumnTextSX}>
                Hello World! My name is Justin Chow!
                <br />
                <br />
                I am a recent graduate from California State University of
                California (CSULA) of Fall 2020 with B.S in Computer Science and
                currently looking for a Software Engineer job.
                <br />
                <br />
                The joy in discovery, learning, and creating is my motivation to
                wake up in the morning. Everyday to strive toward the dream of
                financial independence which provides the time to creating
                whatever comes to my mind without restriction. Programming is my
                main focus and the most scalable solution toward financial
                independence and the expression of my creativity. However, I do
                enjoy playing video games and stream online in my off time to
                relax and interact with other gamers. Video gaming is the
                biggest entertainment industry which allow streaming to becoming
                a more viable career as the value of the industry continue to
                grow. The content created from streaming then turn into
                entertaining videos for Youtube to generate more traffic and
                branding.The Mausoleum Clothing is my own personal drop shipping
                clothing brand where I express and test out my creative and
                business knowledge. Unit testing my knowledge to see if what I
                learned is applicable to the real world. There is no real
                progress without trying, applying, and learning.
                <br />
                <br />
                Thanks for reading about me and check out my projects on github!
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AboutPage;
