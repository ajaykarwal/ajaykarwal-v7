import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO";
import AuthorInfo from "../components/AuthorInfo";
import config from "../../data/SiteConfig";
import LinksList from "../../data/links";

export default class LinksPage extends Component {
  render() {
    const linkList = LinksList.map(link => (
      <li key={link.label}>
        <a
          // className="button"

          href={link.url}
          target="_blank"
          rel="nofollow noopener"
        >
          {link.label}
        </a>
        {link.description && <span> — {link.description}</span>}
      </li>
    ));

    return (
      <Layout>
        <Helmet title={`Links – ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <section>
            <header>
              <h1>Links</h1>
              <p>A single place to find my most important content</p>
            </header>
            <ul className="link-list unstyled">{linkList}</ul>
            <AuthorInfo config={config} />
          </section>
        </div>
      </Layout>
    );
  }
}
