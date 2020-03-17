import React, { Component } from "react";
import { Link } from "gatsby";
import { formatDate } from "../utils/global";
import Img from "gatsby-image";

export default class PostListing extends Component {
  getPostList() {
    const { postEdges } = this.props;
    const postList = postEdges.map(postEdge => {
      return {
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        title: postEdge.node.frontmatter.title,
        cover: postEdge.node.frontmatter.cover,
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
          let cover;
          if (post.cover) {
            cover = post.cover.childImageSharp.fluid;
          }

          return (
            <div className={`post-list__item ${cover ? "cover" : ""}`} key={post.title}>
              {simple ? (
                <p>
                  <Link to={post.path}>{post.title}</Link>
                </p>
              ) : (
                <>
                  {cover && <Link className="post-list__item-thumb no-hover" to={post.path}><Img fluid={cover} /></Link>}
                  <div>
                    <h2 className="post-list__item-heading">
                      <Link to={post.path}>{post.title}</Link>
                    </h2>
                    <p className="post-list__item-date">{date}</p>
                    <p className="post-list__item-excerpt">{post.excerpt}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
