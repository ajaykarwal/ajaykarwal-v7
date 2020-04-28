import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "./UserLinks";
import config from "../../data/SiteConfig";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__links">
              <strong>Connect with me</strong>
              <UserLinks config={config} labeled />
            </div>
            <Link to="/" className="footer__logo no-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="icon"
                width="50"
              >
                <path
                  fillRule="evenodd"
                  d="M25 50C11.193 50 0 38.807 0 25S11.193 0 25 0s25 11.193 25 25-11.193 25-25 25zm-.993-26.536l3.893-8.36a.64.64 0 000-.543l-2.281-4.897a.658.658 0 00-.596-.378.658.658 0 00-.596.378l-7.584 16.29a.646.646 0 00.3.85l19.764 9.864a.654.654 0 00.749-.109.65.65 0 00.142-.742l-2.796-6.004a.652.652 0 00-.3-.307l-10.395-5.19a.646.646 0 01-.3-.852zM12.202 35.812a.657.657 0 00.143.747.651.651 0 00.75.108l9.515-4.814a.65.65 0 00.36-.582.65.65 0 00-.36-.582l-5.911-2.966a.657.657 0 00-.883.295l-3.614 7.794z"
                />
              </svg>
            </Link>
          </div>
          <div className="footer__copyright">
            <small>
              <a href="/versions/">Version 7.0</a>, built using{" "}
              <a href="https://www.gatsbyjs.org/">Gatsby</a> and hosted on{" "}
              <a href="https://www.netlify.com/">Netlify</a>. You can see the
              source code on <a href={config.repository}>Github</a>.
            </small>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
