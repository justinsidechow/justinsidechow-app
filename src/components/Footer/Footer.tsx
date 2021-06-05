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
  render() {
    return (
      <p>
        <ul className="copyright">
          <li className="copyright-left-right">Copyright &copy; </li>
          <li>
            <div>
              <a className="copyright-link" href="/contact" target="_blank">
                JustinsideChow
              </a>
            </div>
          </li>
          <li className="copyright-left-right">
            {" " + new Date().getFullYear()}
          </li>
        </ul>
      </p>
    );
  }
}

export default Footer;
