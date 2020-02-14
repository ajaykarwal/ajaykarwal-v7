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
      <section className={`post-list ${simple ? "simple" : ""}`}>
        {postList.map(post => {
          const popular = post.categories.includes("Popular");
          const date = formatDate(post.date);

          return (
            <div className="post-list__item" key={post.title}>
              <h2>
                <Link to={post.path}>
                  {post.title}
                </Link>
              </h2>
              <p>{date}</p>
              <p>{post.excerpt}</p>
              {popular && <div className="popular">Popular</div>}
            </div>
          );
        })}
      </section>
    );
  }
}
