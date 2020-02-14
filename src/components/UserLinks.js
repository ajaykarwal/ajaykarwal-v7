import React from "react";

const UserLinks = props => {
  const { userLinks } = props.config;
  return (
    <div className="user-links">
      {userLinks.map(link => (
        <a href={link.url} key={link.label}>
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default UserLinks;
