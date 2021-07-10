import * as React from "react";
import { Component } from "react";
import MenuItems from "./MenuItems";
import "./Navbar.css";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

class Navbar extends Component {
  state = {
    mobileNavBarMenuClicked: false,
    mobileNavbarItemClicked: false,
    firstRender: false,
    width: 0,
    height: 0,
  };

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  handleClickNavMenu = () => {
    this.setState({
      mobileNavBarMenuClicked: !this.state.mobileNavBarMenuClicked,
    });
  };

  handleClickNavBar = () => {
    this.setState({
      mobileNavbarItemClicked: !this.state.mobileNavbarItemClicked,
    });
  };

  handleClickNavSiteName = () => {
    if (this.state.mobileNavBarMenuClicked) {
      this.setState({ mobileNavbarItemClicked: true });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  handleNavMenuTransition() {
    if (!this.state.mobileNavBarMenuClicked) {
      return "fas fa-bars";
    } else {
      return "fas fa-times";
    }
  }

  navMenuInitiation() {
    if (this.state.width >= 960) {
      this.state.mobileNavBarMenuClicked = false;
      this.state.firstRender = false;
      return "nav-menu firstactive";
    }

    if (this.state.mobileNavbarItemClicked) {
      this.setState({
        mobileNavBarMenuClicked: !this.state.mobileNavBarMenuClicked,
      });
      this.state.mobileNavbarItemClicked = false;
      this.state.firstRender = false;
      this.handleNavMenuTransition();
      return "nav-menu inactive";
    }

    if (this.state.mobileNavBarMenuClicked) {
      this.state.firstRender = true;
      return "nav-menu active";
    } else if (!this.state.mobileNavBarMenuClicked && this.state.firstRender) {
      return "nav-menu inactive";
    } else {
      return "nav-menu firstactive";
    }
  }

  render() {
    return (
      <nav className="navbar-background">
        <Link
          className="navbar-site-name-link"
          to="/"
          onClick={this.handleClickNavSiteName}
        >
          JustinsideChow
        </Link>
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
