import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'

export default class FourOhFour extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Page not found – ${config.siteTitle}`} />
        <SEO />
        <div className="container content-container">
          <div className="text-center">
            <h1>404</h1>
          </div>
        </div>
      </Layout>
    )
  }
}
