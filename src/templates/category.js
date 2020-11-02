import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import config from "../../data/SiteConfig";

export default class CategoryTemplate extends Component {
  render() {
    const { category } = this.props.pageContext;
    const postEdges = this.props.data.allMdx.edges;

    return (
      <Layout>
        <Helmet
          title={`Posts in category "${category}" – ${config.siteTitle}`}
        />
        <div className="container">
          <section>
            <header>
              <h1>
                Posts in <u>{category}</u>
              </h1>
            </header>
            <PostListing postEdges={postEdges} />
          </section>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
         query CategoryPage($category: String) {
           allMdx(
             limit: 1000
             sort: { fields: [frontmatter___date], order: DESC }
             filter: { frontmatter: { categories: { in: [$category] } } }
           ) {
             totalCount
             edges {
               node {
                 fields {
                   slug
                   date
                 }
                 excerpt
                 timeToRead
                 frontmatter {
                   title
                   tags
                   categories
                   cover {
                     childImageSharp {
                       fluid(maxWidth: 1200, maxHeight: 630, quality: 100) {
                         base64
                         aspectRatio
                         src
                         srcSet
                         sizes
                       }
                     }
                   }
                   date
                   template
                 }
               }
             }
           }
         }
       `;
