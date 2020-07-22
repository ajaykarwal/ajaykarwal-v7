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
          const popular = post.tags && post.tags.includes("popular");
          return (
            <div
              className={`post-list__item ${!simple && popular ? "popular" : ""}`}
              key={post.title}
            >
              {simple ? (
                <div>
                  <p className="post-list__item-date">{date}</p>
                  <h3 className="post-list__item-heading">
                    <Link to={post.path}>{post.title}</Link>
                  </h3>
                </div>
              ) : (
                <div>
                {popular && <div className="tag popular"></div>}
                  {popular && (
                    <Link
                      className="post-list__item-popular"
                      to={`/tags/popular/`}
                    >
                      Popular
                    </Link>
                  )}
                  <p className="post-list__item-date">{date}</p>
                  <h2 className="post-list__item-heading">
                    <Link to={post.path}>{post.title}</Link>
                  </h2>
                </div>
              )}
              <div className="post-list__item-categories">
                {post.categories &&
                  post.categories.map(cat => (
                    <Link
                      className={cat.toLowerCase()}
                      to={`/categories/${_.kebabCase(cat)}/`}
                    >
                      {cat}
                    </Link>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
