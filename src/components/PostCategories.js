import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

export default class PostCategories extends Component {
  render() {
    const { categories } = this.props;

    return (
      categories && (
        <div className="post-meta">
          <span className="post-meta__label">Posted in:</span>
          {categories.map(category => (
          <span className="post-meta__tag" key={category}>
            <Link to={`/categories/${_.kebabCase(category)}/`}>{category}</Link>
          </span>
          ))}
        </div>
      )
    );
  }
}
