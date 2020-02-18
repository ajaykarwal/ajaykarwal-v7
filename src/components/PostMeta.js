import React from "react";
import { formatDate } from "../utils/global";
import config from "../../data/SiteConfig";

const PostMeta = props => {
  const { post } = props;

  const date = formatDate(post.date);
  const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(
    post.title
  )}&url=${config.siteUrl}/${post.slug}/&via=${config.userTwitter}`;

  return (
    <div className="post-meta">
      <time className="post-meta__date">{date}</time>
      <span> / </span>
      <a className="post-meta__share" href={twitterShare} target="_blank" rel="noopener noreferrer">
        Share
      </a>
    </div>
  );
};

export default PostMeta;
