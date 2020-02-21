import React from "react";
import { formatDate } from "../utils/global";
import config from "../../data/SiteConfig";
import { Link } from "gatsby";

const PostMeta = props => {
  const { post } = props;

  const date = formatDate(post.date);
  const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(
    post.title
  )}&url=${config.siteUrl}/${post.slug}/&via=${config.userTwitter}`;

  return (
    <div className="post-meta">
      <span className="post-meta__meta-data">
        <time className="post-meta__date">{date}</time>
      </span>
      <span className="post-meta__meta-data">
        <Link to={twitterShare} target="_blank" rel="noopener noreferrer">
          Share
        </Link>
      </span>
    </div>
  );
};

export default PostMeta;
