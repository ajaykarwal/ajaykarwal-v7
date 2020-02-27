import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo";
import PostMeta from "../components/PostMeta";
import PostTags from "../components/PostTags";
import PostCategories from "../components/PostCategories";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Disqus from "../components/Disqus";

export default class PostTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    };
  }

  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.mdx;
    const post = postNode.frontmatter;

    if (!post.id) {
      post.id = slug;
    }

    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className="container">
          <article>
            <header>
              <h1>{post.title}</h1>
              <div className="post-meta-container">
                <PostMeta post={post} />
                <PostCategories categories={post.categories} />
                <PostTags tags={post.tags} />
              </div>
            </header>
            <MDXRenderer>{postNode.body}</MDXRenderer>
          </article>
          <UserInfo config={config} />
          <hr />
          <div className="comments">
            <Disqus postNode={postNode} />
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date
        categories
        tags
        template
      }
      fields {
        slug
        date
      }
      body
      timeToRead
      excerpt
    }
  }
`;
