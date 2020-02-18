import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import PostListing from "../components/PostListing";

export default class BlogPage extends Component {
  state = {
    searchTerm: "",
    currentCategories: [],
    posts: this.props.data.posts.edges,
    filteredPosts: this.props.data.posts.edges
  };

  handleChange = async event => {
    const { name, value } = event.target;

    await this.setState({ [name]: value });

    this.filterPosts();
  };

  filterPosts = () => {
    const { posts, searchTerm, currentCategories } = this.state;

    let filteredPosts = posts.filter(post =>
      post.node.frontmatter.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    if (currentCategories.length > 0) {
      filteredPosts = filteredPosts.filter(
        post =>
          post.node.frontmatter.categories &&
          currentCategories.every(cat =>
            post.node.frontmatter.categories.includes(cat)
          )
      );
    }

    this.setState({ filteredPosts });
  };

  updateCategories = category => {
    const { currentCategories } = this.state;

    if (!currentCategories.includes(category)) {
      this.setState(prevState => ({
        currentCategories: [...prevState.currentCategories, category]
      }));
    } else {
      this.setState(prevState => ({
        currentCategories: prevState.currentCategories.filter(
          cat => category !== cat
        )
      }));
    }
  };

  render() {
    const { filteredPosts, searchTerm, currentCategories } = this.state;
    const filterCount = filteredPosts.length;
    const categories = this.props.data.categories.group;
    return (
      <Layout>
        <Helmet title={`Blog – ${config.siteTitle}`} />
        <SEO />
        <div className="container content-container">
          <section>
            <header>
              <h1>Blog</h1>
              <div className="category-container">
                {categories.map(category => {
                  const active = currentCategories.includes(
                    category.fieldValue
                  );

                  return (
                    <button
                      className={`category-filter ${active ? "active" : ""}`}
                      key={category.fieldValue}
                      onClick={async () => {
                        await this.updateCategories(category.fieldValue);
                        await this.filterPosts();
                      }}
                    >
                      {category.fieldValue}
                    </button>
                  );
                })}
              </div>

              <div className="search-container">
                <input
                  className="search"
                  type="text"
                  name="searchTerm"
                  value={searchTerm}
                  placeholder="Type here to filter posts..."
                  onChange={this.handleChange}
                />
                <div className="filter-count">{filterCount}</div>
              </div>
            </header>
            <PostListing postEdges={filteredPosts} />
          </section>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  {
    posts: allMdx(
      limit: 2000
      sort: { order: DESC, fields: [fields___date] }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 180)
          timeToRead
          frontmatter {
            title
            tags
            categories
            date
            template
          }
        }
      }
    }
    categories: allMdx(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
    tags: allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
