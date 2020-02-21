import React, { Component } from "react";
import { Follow } from "react-twitter-widgets";
import Avatar from "../images/avatar.jpg";

class UserInfo extends Component {
  render() {
    const { userTwitter, userDescription } = this.props.config;
    const { expanded } = this.props;
    return (
      <div className="author">
        <img className="avatar" src={Avatar} alt="That's me!" width="200" />
        <div className="author__info">
          <p>{userDescription}</p>
          <div className="author__support">
            <Follow
              username={userTwitter}
              options={{ count: expanded ? true : "none" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
