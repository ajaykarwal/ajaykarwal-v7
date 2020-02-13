import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <Navigation menuLinks={config.menuLinks} />
        <main id="main-content">{children}</main>
        <Footer />
      </>
    );
  }
}
