import React from "react";
import { formatDate } from "../utils/global";
import config from "../../data/SiteConfig";

const PostMeta = props => {
  const { post } = props;

  const date = formatDate(post.date);
  const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(post.title)}&url=${config.siteUrl}/${post.slug}/&via=${config.userTwitter}`;

  return (
    <div className="post-meta">
      <span className="post-meta__meta-data">
        <time className="post-meta__date">{date}</time>
      </span>
      <span className="post-meta__meta-data">
        <a href={twitterShare} target="_blank" rel="noopener noreferrer">
          Share
        </a>
      </span>
    </div>
  );
};

export default PostMeta;
