import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import Avatar from "../images/avatar.jpg";

export default class Index extends Component {
  render() {
    const { data } = this.props;

    const currentYear = new Date();
    const since2004 = currentYear.getFullYear() - 2004;
    const latestPostEdges = data.latest.edges;
    const popularPostEdges = data.popular.edges;

    return (
      <Layout>
        <Helmet title={`Homepage – ${config.siteTitle}`} />
        <SEO />
        <div className="container homepage">
          <section>
            <img className="avatar" src={Avatar} alt="That's me!" width="200" />
            <h1 title="It's pronounced 'Uh-Jay'">
              <span>Hi, </span>
              I'm Ajay
            </h1>
            <p className="lead">
              I'm a creative front-end developer and user interface designer
              from Buckingham, UK, with a passion for user experience, clean
              code and pixel-perfection.
            </p>
            <p>
              I have over 
              {' '}
              {since2004}
              {' '}
              years experience designing and building
              engaging projects for clients including BP, HSBC, Thames Water,
              BT, Caterpillar, Ministry of Sound, and
              {" "}
              <a href="/portfolio/">many more</a>
              .
            </p>

            <p>
              I pride myself on writing clear, well-structured, and modern HTML,
              CSS and JavaScript, and focus closely on UX, accessibility, and
              performance.
            </p>

            <p>
              For more details about my experience
              {" "}
              <a href="/about/">check out my bio</a>
              {' '}
              or find out
              {" "}
              <a href="/now/">what I'm up to right now</a>
              .
            </p>

            <p>
              I'm currently working as a senior front-end developer at
              {" "}
              <a
                href="https://www.ecx.io/en/"
                target="_blank"
                rel="nofollow noopener"
              >
                ecx.io — an IBM company
              </a>
              .
            </p>
          </section>

          <hr />

          <section className="recent">
            <h2>Recent Posts</h2>
            <PostListing simple postEdges={latestPostEdges} />
            <Link to="/blog/" className="button">
              All posts
            </Link>
          </section>

          {/* <hr />

          <section className="popular">
            <h2>Popular Posts</h2>
            <PostListing simple postEdges={popularPostEdges} />
            <Link to="/tags/popular/" className="button">
              All popular posts
            </Link>
          </section> */}
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
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
            date
            template
          }
        }
      }
    }
    popular: allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: "popular" } } }
    ) {
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
            date
            template
          }
        }
      }
    }
  }
`;
