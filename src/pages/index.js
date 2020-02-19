import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import PageListing from "../components/PageListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import Avatar from "../images/avatar.jpg";

export default class Index extends Component {
  render() {
    const { data } = this.props;

    const currentYear = new Date();
    const since2004 = currentYear.getFullYear() - 2004;
    // const latestPostEdges = data.latest.edges;
    // const popularPostEdges = data.popular.edges;
    // const pageEdges = data.pages.edges;

    return (
      <Layout>
        <Helmet title={`Homepage – ${config.siteTitle}`} />
        <SEO />
        <div className="container content-container homepage">
          <img className="avatar" src={Avatar} alt="That's me!" />
          <h1 title="It's pronounced 'Uh-Jay'">Hi, I'm Ajay</h1>
          <p className="lead">
            I'm a creative front-end developer and user interface designer from
            Buckingham, UK, with a passion for user experience, clean code and
            pixel-perfection.
          </p>
          <p>
            I have over {since2004} years experience designing and building
            engaging projects for clients including BP, HSBC, Thames Water, BT,
            Caterpillar, Ministry of Sound, and <a href="/portfolio/">many more</a>.
          </p>

          <p>
            I pride myself on writing clear, well-structured, and modern HTML,
            CSS and JavaScript, and focus closely on UX, accessibility, and
            performance.
          </p>

          <p>
            For more details about my experience check out my <a href={config.userLinks.linkedin.url} target="_blank" rel="nofollow noopener">LinkedIn</a> profile.
          </p>

          <p>
            I'm currently working as a senior front-end developer at <a href="https://www.ecx.io/en/" target="_blank" rel="nofollow noopener">
              ecx.io — an
              IBM company
            </a>.
          </p>

          {/* <section className="section">
            <h2>Latest Articles</h2>
            <PostListing simple postEdges={latestPostEdges} />
            <Link to="/blog" className="view-all">
              View all
            </Link>
          </section> */}

          {/* <section className="section">
            <h2>
              Pages
            </h2>
            <PageListing pageEdges={pageEdges} />
          </section> */}
          {/* <hr /> */}

          {/* <section className="section">
            <h2>Most Popular</h2>
            <PostListing simple postEdges={popularPostEdges} />
            <Link to="/categories/popular" className="view-all">
              View all
            </Link>
          </section> */}
        </div>
      </Layout>
    );
  }
}

// export const pageQuery = graphql`
//   query IndexQuery {
//     latest: allMdx(
//       limit: 6
//       sort: { fields: [fields___date], order: DESC }
//       filter: { frontmatter: { template: { eq: "post" } } }
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//             date
//           }
//           excerpt
//           timeToRead
//           frontmatter {
//             title
//             tags
//             categories
//             date
//             template
//           }
//         }
//       }
//     }
//     pages: allMdx(
//       limit: 6
//       filter: { frontmatter: { template: { eq: "page" } } }
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             template
//           }
//         }
//       }
//     }
//     popular: allMdx(
//       limit: 7
//       sort: { fields: [fields___date], order: DESC }
//       filter: { frontmatter: { categories: { eq: "Popular" } } }
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//             date
//           }
//           excerpt
//           timeToRead
//           frontmatter {
//             title
//             tags
//             categories
//             date
//             template
//           }
//         }
//       }
//     }
//   }
// `;
