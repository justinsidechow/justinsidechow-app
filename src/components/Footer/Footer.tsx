import { Component } from "react";
import React from "react";
import "./Footer.css";

/*
this is kind of a disgusting way to implement copyright footer
and i believe there is a better way to implement this.
BUT i really wanted to make the copyright-link to pop up like
the navbar so i created a list to put the correct display: 
for the copyright-link.
 */

class Footer extends Component {
  icon() {
    return (
      <div className="social">
        <a href="https://github.com/justinsidechow">
          <img
            className="social-icon"
            src={process.env.PUBLIC_URL + "/Logo/github-icon.png"}
          />
        </a>
        {/*
        <a href="https://www.linkedin.com/in/justinsidechow/">
          <img
            className="social-icon"
            src={process.env.PUBLIC_URL + "/Logo/linkedin-icon.png"}
          />
        </a> */}
        <a href="https://twitch.tv/jbooty">
          <img
            className="social-icon"
            src={process.env.PUBLIC_URL + "/Logo/twitch-icon.png"}
          />
        </a>
        <a href="https://www.youtube.com/channel/UCQ1fJzVpKueH3K3qRDIjgVg">
          <img
            className="social-icon"
            src={process.env.PUBLIC_URL + "/Logo/youtube-icon.png"}
          />
        </a>
        <a href="https://mausoleumclothing.com">
          <img
            className="social-icon"
            src={process.env.PUBLIC_URL + "/Logo/clothing-icon.png"}
          />
        </a>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.icon()}
        <div>
          <div className="website-description">
            Justinsidechow.com written in
          </div>
          <div className="website-description">Typescript/React/CSS/HTML</div>
          <div className="website-description">by Justin Man Hon Chow</div>
        </div>
        <ul className="copyright">
          <li className="copyright-left-right">Copyright &copy; </li>
          <li>
            <div>
              <a className="copyright-link" href="/contact">
                JustinsideChow
              </a>
            </div>
          </li>
          <li className="copyright-left-right">
            {" " + new Date().getFullYear()}
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
