import React, { Component } from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import LastFM from "../components/LastFmData.js";

export default class NowPage extends Component {
  render() {

    return (
      <Layout>
        <Helmet title={`Homepage – ${config.siteTitle}`} />
        <SEO />
        <div className="container content-container">
          <h1>Hi, I'm Ajay</h1>
          <p>
            Here are some of the things I’m currently focused on.
          </p>

          <p>
            **Last updated:** February 2020.
          </p>

          <h2>Work</h2>

          <p>
            I'm currently working on a ReactJS project for BP, developing some forms for their Airfield fuel automation process.
          </p>

          <h2>Reading</h2>

          <p>
            I'm current reading [Rich Dad's Cashflow Quadrant](https://amzn.to/2Jgo3Z4) by Robert Kiyosaki.
          </p>

          <p>
            Check out more of my recommended books on [my Goodreads profile](https://www.goodreads.com/ajaykarwal).
          </p>

          <h2>Watching</h2>

          <p>
            Currently wathching [Power](https://www.netflix.com/title/70298433) on Netflix.
          </p>

          <h2>Music</h2>

          <LastFM />

          <h2>Gaming</h2>

          <p>
            I'm currently playing The Legend of Zelda: Link's Awakening on the Nintendo Switch.
          </p>

          <hr/>

          <p>
            This page is inspired by Derek Siver’s [now page](http://sivers.org/now) suggestion and his [Now Now Now](http://nownownow.com/) movement.
          </p>

        </div>
      </Layout>
    );
  }
}