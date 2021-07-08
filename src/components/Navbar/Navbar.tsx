import * as React from "react";
import { Component } from "react";
import MenuItems from "./MenuItems";
import "./Navbar.css";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

class Navbar extends Component {
  state = {
    clicked: false,
    mobileNavbarClicked: false,
    firstRender: false,
    width: 0,
    height: 0,
  };

  handleClickNavMenu = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleClickNavBar = () => {
    this.setState({ mobileNavbarClicked: !this.state.mobileNavbarClicked });
  };

  handleNavMenuTransition() {
    if (!this.state.clicked) {
      return "fas fa-bars";
    } else {
      return "fas fa-times";
    }
  }

  navMenuInitiation() {
    if (this.state.width >= 960) {
      this.state.clicked = false;
      this.state.firstRender = false;
      return "nav-menu firstactive";
    }

    if (this.state.mobileNavbarClicked) {
      this.setState({ clicked: !this.state.clicked });
      this.state.mobileNavbarClicked = false;
      this.state.firstRender = false;
      this.handleNavMenuTransition();
      return "nav-menu inactive";
    }

    if (this.state.clicked) {
      this.state.firstRender = true;
      return "nav-menu active";
    } else if (!this.state.clicked && this.state.firstRender) {
      return "nav-menu inactive";
    } else {
      return "nav-menu firstactive";
    }
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <nav className="navbar-background">
        <i className="navbar-menu-logo"></i>
        <a className="navbar-site-name-link" href="/">
          JustinsideChow
        </a>
        <div className="menu-icon" onClick={this.handleClickNavMenu}>
          <i className={this.handleNavMenuTransition()}></i>
        </div>
        <ul className={this.navMenuInitiation()}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className="nav-links"
                  to={item.url}
                  onClick={this.handleClickNavBar}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
