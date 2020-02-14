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
        {pageList.map(page => (
          <p key={page.title}>
            <Link to={page.path}>{page.title}</Link>
          </p>
        ))}
      </div>
    );
  }
}

export default PageListing;
