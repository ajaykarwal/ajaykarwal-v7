import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

export default class PostTags extends Component {
  render() {
    const { tags, size } = this.props;

    return (
      <div className="post-tags">
        {tags &&
          tags.map(tag => (
            <Link className="post-tags__tag" key={tag} to={`/tags/${_.kebabCase(tag)}/`}>
              <span className={size}>{tag}</span>
            </Link>
          ))}
      </div>
    );
  }
}
