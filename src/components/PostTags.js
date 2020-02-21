import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

export default class PostTags extends Component {
  render() {
    const { tags } = this.props;

    return (
      tags && (
        <div className="post-meta">
          <span className="post-meta__label">Tags:</span>

          {tags.map(tag => (
            <span className="post-meta__tag" key={tag}>
              <Link to={`/tags/${_.kebabCase(tag)}/`}>{tag}</Link>
            </span>
          ))}
        </div>
      )
    );
  }
}
