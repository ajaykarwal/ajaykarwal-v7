import React from "react";

const UserLinks = props => {
  const { userLinks } = props.config;
  const linkList = [];
  for (var link in userLinks) {
    linkList.push(
      <p key={userLinks[link].label}>
        <a href={userLinks[link].url} target="_blank" rel="nofollow noopener">
          {userLinks[link].label}
        </a>
      </p>
    );
  }
  return <div className="user-links">{linkList}</div>;
};

export default UserLinks;
