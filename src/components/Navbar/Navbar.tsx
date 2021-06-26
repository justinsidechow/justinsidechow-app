import * as React from "react";
import { Component } from "react";
import MenuItems from "./MenuItems";
import "./Navbar.css";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

class Navbar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

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
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className="nav-links" to={item.url}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
