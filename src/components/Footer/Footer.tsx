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
  icon_business() {
    return (
      <div className="social">
        <a href="https://github.com/justinsidechow">
          <img
            className="social-icon"
            alt="github"
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
            alt="twitch"
            src={process.env.PUBLIC_URL + "/Logo/twitch-icon.png"}
          />
        </a>
        <a href="https://www.youtube.com/channel/UCQ1fJzVpKueH3K3qRDIjgVg">
          <img
            className="social-icon"
            alt="youtube"
            src={process.env.PUBLIC_URL + "/Logo/youtube-icon.png"}
          />
        </a>
        <a href="https://mausoleumclothing.com">
          <img
            className="social-icon"
            alt="mausoleum"
            src={process.env.PUBLIC_URL + "/Logo/clothing-icon.png"}
          />
        </a>
      </div>
    );
  }

  icon_social() {
    return (
      <div className="social">
        <a href="https://twitter.com/justinsidechow">
          <img
            className="social-icon"
            alt="twitch"
            src={process.env.PUBLIC_URL + "/Logo/twitter-icon.png"}
          />
        </a>
        <a href="https://www.instagram.com/justinsidechow/">
          <img
            className="social-icon"
            alt="instagram"
            src={process.env.PUBLIC_URL + "/Logo/instagram-icon.png"}
          />
        </a>
        <a href="mailto:justinsidechow@gmail.com">
          <img
            className="social-icon"
            alt="email"
            src={process.env.PUBLIC_URL + "/Logo/email-icon.png"}
          />
        </a>
      </div>
    );
  }

  render() {
    return (
      <footer className="footer">
        {this.icon_business()}
        {this.icon_social()}
        <div>
          <div className="website-description">
            Justinsidechow.com written in
          </div>
          <div className="website-description">
            Typescript / React / NodeJS / HTML / CSS
          </div>
          <div className="website-description">by Justin Chow</div>
        </div>
        <ul className="copyright">
          <li className="copyright-left-right">
            Copyright &copy; {" " + new Date().getFullYear()}
          </li>
          <li>
            <div>
              <a className="copyright-link" href="/contact">
                JustinsideChow
              </a>
            </div>
          </li>
          <li className="copyright-left-right">All Rights Reserved</li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
