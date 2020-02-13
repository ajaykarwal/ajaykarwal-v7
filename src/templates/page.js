import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo";
import Disqus from "../components/Disqus";
import PostTags from "../components/PostTags";
import SocialLinks from "../components/SocialLinks";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import config from "../../data/SiteConfig";

export default class PageTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const page = postNode.frontmatter;
    if (!page.id) {
      page.id = slug;
    }

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${page.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div>
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-meta">
              <PostTags tags={page.tags} />
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
            <UserInfo config={config} />
            <Disqus postNode={postNode} />
            <Footer config={config} />
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
