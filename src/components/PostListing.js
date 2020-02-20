import React, { Component } from "react";
import { Link } from "gatsby";
import { formatDate } from "../utils/global";

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
        categories: postEdge.node.frontmatter.categories
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
            <div className="post-list__item" key={post.title}>
              {simple ? (
                <p>
                  <Link to={post.path}>{post.title}</Link>
                </p>
              ) : (
                <>
                  <h2 className="post-list__item-heading">
                    <Link to={post.path}>{post.title}</Link>
                  </h2>
                  <p className="post-list__item-date">{date}</p>
                  <p className="post-list__item-excerpt">{post.excerpt}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
