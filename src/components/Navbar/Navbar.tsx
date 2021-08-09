import { Component } from "react";
import MenuItems from "./MenuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    mobileNavBarMenuClicked: false,
    mobileNavbarItemClicked: false,
    firstRender: true,
    width: 0,
    height: 0,
  };

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (this.state.width >= 960) {
      this.setState({ firstRender: true, mobileNavBarMenuClicked: false });
    }
  };

  handleClickNavMenu = () => {
    this.setState({
      mobileNavBarMenuClicked: !this.state.mobileNavBarMenuClicked,
      firstRender: false,
    });
  };

  handleClickNavBar = () => {
    this.setState({
      mobileNavbarItemClicked: true,
      mobileNavBarMenuClicked: false,
    });
  };

  handleClickNavSiteName = () => {
    this.setState({
      mobileNavbarItemClicked: true,
      mobileNavBarMenuClicked: false,
    });
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
    let render = "nav-menu firstactive";

    if (this.state.width >= 960) {
      render = "nav-menu firstactive";
    }

    if (this.state.mobileNavBarMenuClicked) {
      render = "nav-menu active";
    } else if (
      !this.state.mobileNavBarMenuClicked &&
      !this.state.firstRender &&
      !this.state.mobileNavbarItemClicked
    ) {
      render = "nav-menu inactive";
    }

    return render;
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
