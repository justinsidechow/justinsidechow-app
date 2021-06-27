import * as React from "react";
import { Component } from "react";
import MenuItems from "./MenuItems";
import "./Navbar.css";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

class Navbar extends Component {
  state = {
    clicked: false,
    firstRender: false,
    width: 0,
    height: 0,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  navMenuInitiation() {
    if (this.state.width >= 960) {
      this.state.clicked = false;
      this.state.firstRender = false;
      return "nav-menu firstactive";
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
        <a className="navbar-name-link" href="/">
          JustinsideChow
        </a>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.navMenuInitiation()}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className="nav-links" to={item.url}>
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
