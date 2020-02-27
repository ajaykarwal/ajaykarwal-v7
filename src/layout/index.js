import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/main.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Helmet>
          <html lang="en"/>
          <meta name="description" content={config.siteDescription} />
          <meta name="author" content={config.userName}/>
          <meta name="robots" content="index, follow" />

          <link rel="shortcut icon" type="image/png" href={config.siteLogo} />          
          <link rel="alternate" type="application/rss+xml" title={config.siteRssTitle} href={config.siteRss} />
        </Helmet>
        <Header menuLinks={config.menuLinks} />
        <main id="main-content">{children}</main>
        <Footer />
      </>
    );
  }
}
