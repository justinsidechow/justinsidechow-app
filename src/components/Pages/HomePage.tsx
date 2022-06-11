import { Typography, Box, Container } from "@mui/material";

const desktopBoxSX = {
  display: { xs: "none", md: "flex" },
  bgcolor: "#282828",
  height: "100vh",
  width: "100%",
  padding: "auto",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundImage: `url(${
    process.env.PUBLIC_URL + "/Photo/home-background.jpg"
  })`,
};

const desktopContainerSX = {
  maxWidth: "50vw",
  marginTop: "15vh",
  marginBottom: "50vh",
  marginLeft: "15vw",
  marginRight: "40vw",
};

const desktopTitleSX = {
  fontSize: "6vw",
  textShadow: "3px 3px 5px black",
  fontWeight: "bolder",
  color: "white",
  margin: "0",
};

const desktopMissionSX = {
  fontSize: "3vw",
  textShadow: "2px 2px 3px black",
  color: "white",
};

const mobileBoxSX = {
  display: { xs: "flex", md: "none" },
  bgcolor: "#282828",
  height: "100vh",
  width: "100%",
  padding: "auto",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundImage: `url(${
    process.env.PUBLIC_URL + "/Photo/home-background.jpg"
  })`,
};

const mobileContainerSX = {
  maxWidth: "100%",
  marginTop: "5vh",
  marginBottom: "50vh",
  padding: "auto",
};

const mobileTitleSX = {
  fontSize: "13vw",
  textShadow: "3px 3px 5px black",
  fontWeight: "bolder",
  color: "white",
  margin: "auto",
};

const mobileMissionSX = {
  fontSize: "5vw",
  textShadow: "2px 2px 3px black",
  color: "white",
};

function HomePage() {
  return (
    <div>
      <Box sx={desktopBoxSX}>
        <Container sx={desktopContainerSX}>
          <Typography sx={desktopTitleSX} gutterBottom>
            Justin Chow
          </Typography>
          <Typography sx={desktopMissionSX}>Programming the Future</Typography>
          <Typography sx={desktopMissionSX}>One Line at a Time</Typography>
        </Container>
      </Box>
      <Box sx={mobileBoxSX}>
        <Container sx={mobileContainerSX}>
          <Typography sx={mobileTitleSX} gutterBottom>
            Justin Chow
          </Typography>
          <Typography sx={mobileMissionSX}>Programming the Future</Typography>
          <Typography sx={mobileMissionSX}>One Line at a Time</Typography>
        </Container>
      </Box>
    </div>
  );
}

export default HomePage;
