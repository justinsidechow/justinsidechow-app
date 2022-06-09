import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { CardMedia } from "@mui/material";

const pages = [
  ["About", "/about"],
  ["Github", "/github"],
  ["Linkedin", "https://www.linkedin.com/in/justinsidechow/"],
  ["Contact", "/contact"],
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        position: "static",
        backgroundColor: "#282828",
      }}
    >
      <Box
        maxWidth="x1"
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          {/*end of desktop menu*/}
          <Container
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <CardMedia
              sx={{
                height: "2em",
                width: "2em",
                marginRight: "0.5em",
              }}
              image={process.env.PUBLIC_URL + "/Logo/justinsidechow-logo.png"}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                transition: "100ms",
                paddingRight: "1em",
                paddingTop: "0.5em",
                paddingBottom: "0.5em",
                "&:hover": {
                  paddingTop: "0em",
                  color: "#FFFFFF",
                  textShadow: "0 0 3px #FFFFFF",
                },
              }}
            >
              JustinsideChow
            </Typography>
          </Container>
          <Container
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page[0]}
                href={page[1]}
                onClick={handleCloseNavMenu}
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
          <Container
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Container>
          <Container
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
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
                marginLeft: "auto",
                marginRight: "auto",
                "&:hover": {
                  paddingTop: "0em",
                  color: "#FFFFFF",
                  textShadow: "0 0 3px #FFFFFF",
                },
              }}
            >
              JustinsideChow
            </Typography>
          </Container>
          <Container
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "end",
            }}
          >
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
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                "& .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
                  {
                    backgroundColor: "#282828",
                  },

                display: { xs: "flex", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page[0]} onClick={handleCloseNavMenu}>
                  <Button
                    key={page[0]}
                    href={page[1]}
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: "white",
                      display: "block",
                      transition: "100ms",
                      minHeight: "2em",
                      minWidth: "2em",
                      fontSize: "1em",
                      padding: "1em",
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
