import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

export default class BlogPage extends Component {
  render() {

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Full Stack Software Developer`} />
        <SEO />
        <div className="container">
          <h1>Blog</h1>
        </div>
      </Layout>
    );
  }
}