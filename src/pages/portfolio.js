import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import projects from "../../data/projects";

class InfoPanel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { project } = this.props;

    return (
      <div className="project__info">
        <img src={project.image} alt={project.title} />
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        {project.role && (
          <>
            <h3>My Role</h3>
            <p>{project.role}</p>
          </>
        )}
        {project.tech && (
          <>
            <h3>Tech</h3>
            <ul>
              {project.tech.map(tech => (
                <li>{tech}</li>
              ))}
            </ul>
          </>
        )}
        {project.path && (
          <a
            className="button"
            href={project.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        )}
      </div>
    );
  }
}

export default class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e, project) => {
    console.log("hello");
    e.preventDefault();
    console.log(e.currentTarget, project);
  };
  
  // TODO https://stackoverflow.com/a/35906206
  // insertInfoPanel = () => {

  // }
  render() {
    let showInfoPanel = false;

    return (
      <Layout>
        <Helmet title={`Portfolio – ${config.siteTitle}`} />
        <SEO />
        <div className="container content-container">
          <section>
            <header>
              <h1>Portfolio</h1>
            </header>
            <p>
              It's a little tricky to create a portfolio of development work
              I've been involved in. It can't always be portrayed with shiny
              screenshots or cool UX prototypes and behind-the-scenes photos of
              spint meetings.
            </p>

            <p>
              So rather than a traditional portfolio, here are some of the great
              clients I've worked with in the past and some details of some of
              the larger projects I've been involved in.
            </p>
            <div className="projects">
              {projects.map(project => (
                <div className="project" key={project.id}>
                  <button
                    className="button project__button"
                    onClick={e => this.handleClick(e, project)}
                  >
                    <img src={project.image} alt={project.title} />
                  </button>
                  {showInfoPanel && <InfoPanel project />}
                </div>
              ))}
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
