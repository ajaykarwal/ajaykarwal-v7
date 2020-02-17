import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import _ from 'lodash'
import Layout from '../layout'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'

export default class TagsPage extends Component {
  render() {
    const { group } = this.props.data.allMdx

    return (
      <Layout>
        <SEO />
        <Helmet title={`Tags – ${config.siteTitle}`} />
        <div className="container content-container">
          <h1>Tags</h1>
          <div className="tag-container">
            {group.map(tag => (
              <Link to={`/tags/${_.kebabCase(tag.fieldValue)}`}>
                <span key={tag.fieldValue}>
                  {tag.fieldValue} <strong className="count">{tag.totalCount}</strong>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query TagsQuery {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
