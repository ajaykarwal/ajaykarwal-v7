import React, { Component } from "react";
import { Follow } from "react-twitter-widgets";
import Avatar from "../images/avatar.jpg";
import KofiButton from "../images/kofi-button.png";
import PatreonButton from "../images/patreon-button.png";

class UserInfo extends Component {
  render() {
    const { userTwitter, userDescription } = this.props.config;
    const { expanded } = this.props;
    return (
      <div className="author">
        <img className="avatar" src={Avatar} alt="That's me!" width="200" />
        <div className="author__info">
          <p>{userDescription}</p>
        </div>
        <div className="author__support">
          <a
            className="supporter-button patreon no-hover"
            href="https://www.patreon.com/ajaykarwal"
            target="_blank"
            rel="nofollow noopener"
          >
            <img src={PatreonButton} alt="Become a Patron" />
          </a>
          <a
            className="supporter-button kofi no-hover"
            href="https://www.ko-fi.com/ajaykarwal"
            target="_blank"
            rel="nofollow noopener"
          >
            <img src={KofiButton} alt="Buy me a coffee" />
          </a>
        </div>
      </div>
    );
  }
}

export default UserInfo;
