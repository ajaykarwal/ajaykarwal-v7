import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import LinksList from "../../data/links";

export default class LinksPage extends Component {
  render() {
    const linkList = LinksList.map(link => (
      <a
        className="button"
        key={link.label}
        href={link.url}
        target="_blank"
        rel="nofollow noopener"
      >
        {link.label}
        {link.description && (<span>{link.description}</span>)}
      </a>
    ));

    return (
      <Layout>
        <Helmet title={`Links – ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <section>
            <header>
              <h1>Links to some of my content</h1>
            </header>
            <div className="link-list">{linkList}</div>
          </section>
        </div>
      </Layout>
    );
  }
}
