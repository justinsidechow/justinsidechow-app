import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { CardMedia } from "@mui/material";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

const appBarSX = {
  position: "static",
  backgroundColor: "#282828",
  padding: "auto",
};

const centerSX = {
  alignItems: "center",
  justifyContent: "center",
};

const desktopCenterSX = {
  display: { xs: "none", md: "flex" },
  alignItems: "center",
  justifyContent: "center",
};

const logoSX = {
  height: "2em",
  width: "2em",
  marginRight: "0.5em",
};

const titleButtonSX = {
  textTransform: "none",
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: "0.3rem",
  fontSize: "1.5em",
  color: "inherit",
  transition: "100ms",
  textDecoration: "none",
  paddingTop: "0.5em",
  paddingBottom: "0.5em",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "#282828",
    paddingTop: "0em",
    color: "#FFFFFF",
    textShadow: "0 0 3px #FFFFFF",
  },
};

const mobileCenterSX = {
  display: { xs: "flex", md: "none" },
  alignItems: "center",
  justifyContent: "center",
};

const mobileMenuButtonSX = {
  display: { xs: "flex", md: "none" },
  alignItems: "center",
  justifyContent: "end",
};

const mobileMenuButtonBackgroundSX = {
  "& .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper": {
    backgroundColor: "#282828",
  },

  display: { xs: "flex", md: "none" },
};

const pages = [["About"], ["Github"], ["Linkedin"], ["Contact"]];

function Navbar() {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageDispatch = (page: String) => {
    switch (page) {
      case "Home":
        navigate("/");
        break;
      case "About":
        navigate("/about");
        break;
      case "Github":
        navigate("/github");
        break;
      case "Linkedin":
        window.location.replace("https://www.linkedin.com/in/justinsidechow/");
        break;
      case "Contact":
        window.location.replace("mailto:justinsidechow@gmail.com");
        break;
    }
  };

  return (
    <AppBar sx={appBarSX}>
      <Box maxWidth="x1" sx={centerSX}>
        <Toolbar>
          {/*start of desktop menu*/}
          <Container sx={desktopCenterSX}>
            <CardMedia
              sx={logoSX}
              image={process.env.PUBLIC_URL + "/Logo/justinsidechow-logo.png"}
            />
            <Button
              key={"home"}
              onClick={() => handlePageDispatch("Home")}
              disableRipple
              sx={titleButtonSX}
            >
              JustinsideChow
            </Button>
          </Container>
          <Container sx={desktopCenterSX}>
            {pages.map((page) => (
              <Button
                key={page[0]}
                onClick={() => handlePageDispatch(page[0])}
                sx={{
                  color: "white",
                  transition: "100ms",
                  minHeight: "2em",
                  fontSize: "1em",
                  paddingRight: "1em",
                  paddingLeft: "1em",
                  paddingTop: "0.5em",
                  ...(page[0] === "About" && {
                    "&:hover": {
                      paddingTop: "0em",
                      color: "#38C6F4",
                      textShadow: "0 0 3px #38C6F4",
                    },
                  }),
                  ...(page[0] === "Github" && {
                    "&:hover": {
                      paddingTop: "0em",
                      color: "#6E5494",
                      textShadow: "0 0 3px #6E5494",
                    },
                  }),
                  ...(page[0] === "Linkedin" && {
                    "&:hover": {
                      paddingTop: "0em",
                      color: "#0077B5",
                      textShadow: "0 0 3px #0077B5",
                    },
                  }),
                  ...(page[0] === "Contact" && {
                    "&:hover": {
                      paddingTop: "0em",
                      color: "#DB4437",
                      textShadow: "0 0 3px #DB4437",
                    },
                  }),
                }}
              >
                {page[0]}
              </Button>
            ))}
          </Container>
          {/*end of desktop menu*/}
          {/*start of mobile menu*/}
          <Container sx={mobileCenterSX} disableGutters={true}></Container>
          <Container sx={mobileCenterSX} disableGutters={true}>
            <Button
              key={"home"}
              onClick={() => handlePageDispatch("Home")}
              disableRipple
              sx={titleButtonSX}
            >
              JustinsideChow
            </Button>
          </Container>
          <Container sx={mobileMenuButtonSX} disableGutters>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              keepMounted
              disableScrollLock={true}
              sx={mobileMenuButtonBackgroundSX}
            >
              {pages.map((page) => (
                <MenuItem key={page[0]} onClick={handleCloseNavMenu}>
                  <Button
                    key={page[0]}
                    onClick={() => handlePageDispatch(page[0])}
                    sx={{
                      color: "white",
                      display: "block",
                      transition: "100ms",
                      minHeight: "2em",
                      minWidth: "2em",
                      fontSize: "1em",
                      py: "1em",
                      ...(page[0] === "About" && {
                        "&:hover": {
                          color: "#38C6F4",
                          textShadow: "0 0 3px #38C6F4",
                        },
                      }),
                      ...(page[0] === "Github" && {
                        "&:hover": {
                          color: "#6E5494",
                          textShadow: "0 0 3px #6E5494",
                        },
                      }),
                      ...(page[0] === "Linkedin" && {
                        "&:hover": {
                          color: "#0077B5",
                          textShadow: "0 0 3px #0077B5",
                        },
                      }),
                      ...(page[0] === "Contact" && {
                        "&:hover": {
                          color: "#DB4437",
                          textShadow: "0 0 3px #DB4437",
                        },
                      }),
                    }}
                  >
                    {page[0]}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Container>
          {/*end of mobile menu*/}
        </Toolbar>
      </Box>
    </AppBar>
  );
}
export default Navbar;
