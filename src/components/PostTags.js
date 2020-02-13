import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'

export default class PostTags extends Component {
  render() {
    const { tags, size } = this.props

    return (
      <div className="tag-container">
        {tags &&
          tags.map(tag => (
            <Link key={tag} style={{ textDecoration: 'none' }} to={`/tags/${_.kebabCase(tag)}/`}>
              <span className={size}>{tag}</span>
            </Link>
          ))}
      </div>
    )
  }
}
