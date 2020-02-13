import React from "react";
import { Link } from "gatsby";

class PageListing extends React.Component {
  getPageList() {
    const pageList = [];
    this.props.pageEdges.forEach(pageEdge => {
      pageList.push({
        path: pageEdge.node.fields.slug,
        title: pageEdge.node.frontmatter.title
      });
    });
    return pageList;
  }

  render() {
    const pageList = this.getPageList();
    return (
      <div className="pages-listing">
        {/* Your post list here. */
        pageList.map(page => (
          <Link to={page.path} key={page.title}>
            <h2>{page.title}</h2>
          </Link>
        ))}
      </div>
    );
  }
}

export default PageListing;
