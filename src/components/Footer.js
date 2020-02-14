import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "./UserLinks";
import config from "../../data/SiteConfig";

class Footer extends Component {
  render() {
    const url = config.siteRss;
    const { copyright } = config;
    return (
      <footer className="footer">
        Connect with me:
        <br />
        <UserLinks config={config} labeled />
        <Link to={url}>
          <button>RSS</button>
        </Link>
        <small>{copyright}</small>
      </footer>
    );
  }
}

export default Footer;
