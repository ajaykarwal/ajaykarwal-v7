import React, { Component } from "react";
import { Link } from "gatsby";
import { formatDate } from "../utils/global";
import _ from "lodash";

export default class PostListing extends Component {
  getPostList() {
    const { postEdges } = this.props;
    const postList = postEdges.map(postEdge => {
      return {
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        categories: postEdge.node.frontmatter.categories,
      };
    });
    return postList;
  }

  render() {
    const { simple } = this.props;
    const postList = this.getPostList();
    return (
      <div className={`post-list ${simple ? "simple" : ""}`}>
        {postList.map(post => {
          const date = formatDate(post.date);
          return (
            <div className={`post-list__item`} key={post.title}>
              {simple ? (
                <div>
                  <p className="post-list__item-date">{date}</p>
                  {/* {popular && <div className="tag popular">Popular</div>} */}
                  <h3 className="post-list__item-heading">
                    <Link to={post.path}>{post.title}</Link>
                  </h3>
                </div>
              ) : (
                <div>
                  <p className="post-list__item-date">{date}</p>
                  {/* {popular && <div className="tag popular">Popular</div>} */}
                  <h2 className="post-list__item-heading">
                    <Link to={post.path}>{post.title}</Link>
                  </h2>
                </div>
              )}
              <div className="post-list__item-tags">
                {post.tags && post.tags.map(tag => (
                  <span className={tag.toLowerCase()}>
                    <Link to={`/tags/${_.kebabCase(tag)}/`}>{tag}</Link>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
