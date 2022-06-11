import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { CardMedia, CardActionArea, Card } from "@mui/material";

const socialIconBoxSX = {
  display: "flex",
  mb: "0.5em",
  padding: "auto",
  alignItems: "center",
  justifyContent: "safe center",
};

const footerCardBackgroundSX = {
  border: "none",
  boxShadow: "none",
  backgroundColor: "#282828",
};

const iconSX = {
  border: "none",
  boxShadow: "none",
  height: "3em",
  padding: "0.5em",
  transition: "100ms",
  "&:hover": {
    transform: "scale(1.5, 1.5)",
  },
};

const copyrightSX = {
  color: "white",
  paddingBottom: "1em",
  paddingTop: "1em",
  "&:hover": {
    paddingTop: "0em",
    textShadow: "0 0 2px #FFFFFF",
  },
};

const footerBoxSX = {
  display: "flex",
  backgroundColor: "#282828",
  py: 3,
  alignItems: "center",
  justifyContent: "center",
};

function SocialIcons() {
  return (
    <Box sx={socialIconBoxSX}>
      <Card sx={footerCardBackgroundSX}>
        <CardActionArea href="https://twitter.com/justinsidechow">
          <CardMedia
            component="img"
            image={process.env.PUBLIC_URL + "/Logo/twitter-icon.png"}
            title="twitter"
            sx={iconSX}
          />
        </CardActionArea>
      </Card>
      <Card
        sx={{
          border: "none",
          boxShadow: "none",
          backgroundColor: "#282828",
        }}
      >
        <CardActionArea href="https://www.instagram.com/justinsidechow/">
          <CardMedia
            component="img"
            image={process.env.PUBLIC_URL + "/Logo/instagram-icon.png"}
            title="instagram"
            sx={iconSX}
          />
        </CardActionArea>
      </Card>
      <Card
        sx={{
          border: "none",
          boxShadow: "none",
          backgroundColor: "#282828",
        }}
      >
        <CardActionArea href="https://www.twitch.tv/jbooty">
          <CardMedia
            component="img"
            image={process.env.PUBLIC_URL + "/Logo/twitch-icon.png"}
            title="instagram"
            sx={iconSX}
          />
        </CardActionArea>
      </Card>
      <Card
        sx={{
          border: "none",
          boxShadow: "none",
          backgroundColor: "#282828",
        }}
      >
        <CardActionArea href="https://www.youtube.com/channel/UCQ1fJzVpKueH3K3qRDIjgVg">
          <CardMedia
            component="img"
            image={process.env.PUBLIC_URL + "/Logo/youtube-icon.png"}
            title="instagram"
            sx={iconSX}
          />
        </CardActionArea>
      </Card>
      <Card
        sx={{
          border: "none",
          boxShadow: "none",
          backgroundColor: "#282828",
        }}
      >
        <CardActionArea href="https://github.com/justinsidechow">
          <CardMedia
            component="img"
            image={process.env.PUBLIC_URL + "/Logo/github-icon.png"}
            title="github"
            sx={iconSX}
          />
        </CardActionArea>
      </Card>
      <Card
        sx={{
          border: "none",
          boxShadow: "none",
          backgroundColor: "#282828",
        }}
      >
        <CardActionArea href="https://www.linkedin.com/in/justinsidechow/">
          <CardMedia
            component="img"
            image={process.env.PUBLIC_URL + "/Logo/linkedin-icon.png"}
            title="linkedin"
            sx={iconSX}
          />
        </CardActionArea>
      </Card>
      <Card
        sx={{
          border: "none",
          boxShadow: "none",
          backgroundColor: "#282828",
        }}
      >
        <CardActionArea href="mailto:justinsidechow@gmail.com">
          <CardMedia
            component="img"
            image={process.env.PUBLIC_URL + "/Logo/email-icon.png"}
            title="email"
            sx={iconSX}
          />
        </CardActionArea>
      </Card>
    </Box>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "white" }} align="center">
      {"Copyright © "}
      <Link
        sx={copyrightSX}
        color="inherit"
        href="https://github.com/justinsidechow/justinsidechow-app"
      >
        JustinsideChow
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

// interface FooterProps {
//   description: string;
//   title: string;
// }

function Footer() {
  return (
    <Box component="footer" sx={footerBoxSX}>
      <Container maxWidth="lg">
        <SocialIcons />
        <Typography
          variant="body2"
          sx={{ color: "white", margin: "0.5em" }}
          align="center"
        >
          Created by Man 'Justin' Chow
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
