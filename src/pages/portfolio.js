import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import projectList from "../../data/projects";
import DetailsIcon from "../images/details.svg";

class InfoPanel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const project = this.props;

    return (
      <div className="project__info">
        <div className="details">
          <h2>{project.title}</h2>
          <p>{project.description}</p>

          {project.role && (
            <>
              <h3>My Role</h3>
              <p>{project.role}</p>
            </>
          )}
        </div>
        <div className="meta">
          {project.tech && (
            <>
              <h3>Tech</h3>
              <ul className="tech-stack">
                {project.tech.map(tech => (
                  <li className="tech-stack__item">{tech}</li>
                ))}
              </ul>
            </>
          )}
          {project.path && (
          <div className="actions">
            <a href={project.path} target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        )}
        </div>
        
      </div>
    );
  }
}

export default class PortfolioPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectList,
      selectedProject: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e, project) => {
    e.preventDefault();

    this.setState({
      selectedProject:
        this.state.selectedProject === project.id ? "" : project.id
    });
  };

  render() {
    return (
      <Layout>
        <Helmet title={`Portfolio – ${config.siteTitle}`} />
        <SEO />
        <div className="container">
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
              {this.state.projectList.map(project => (
                <>
                  <button
                    disabled={!project.description}
                    key={project.id}
                    className={`button project__button ${
                      this.state.selectedProject === project.id ? "on" : ""
                    }`}
                    onClick={e => this.handleClick(e, project)}
                  >
                    {project.description && (
                      <img className="has-details" src={DetailsIcon} />
                    )}
                    <img
                      src={`/clients/${project.id}.svg`}
                      alt={project.title}
                    />
                  </button>
                  {this.state.selectedProject === project.id ? (
                    <InfoPanel {...project} />
                  ) : null}
                </>
              ))}
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
