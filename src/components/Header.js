import React, { Component } from "react";
import { Link } from "gatsby";

export default class Header extends Component {
  state = {
    scrolled: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.headerOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.headerOnScroll);
  }

  headerOnScroll = () => {
    if (window.scrollY > 100) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const { scrolled } = this.state;
    const { menuLinks } = this.props;

    return (
      <header role="banner" className={scrolled ? "header scroll" : "header"}>
        <div className="container">
          <div className="header__content">
            <Link to="/" className="header__logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M25 50C11.193 50 0 38.807 0 25S11.193 0 25 0s25 11.193 25 25-11.193 25-25 25zm-.993-26.536l3.893-8.36a.64.64 0 000-.543l-2.281-4.897a.658.658 0 00-.596-.378.658.658 0 00-.596.378l-7.584 16.29a.646.646 0 00.3.85l19.764 9.864a.654.654 0 00.749-.109.65.65 0 00.142-.742l-2.796-6.004a.652.652 0 00-.3-.307l-10.395-5.19a.646.646 0 01-.3-.852zM12.202 35.812a.657.657 0 00.143.747.651.651 0 00.75.108l9.515-4.814a.65.65 0 00.36-.582.65.65 0 00-.36-.582l-5.911-2.966a.657.657 0 00-.883.295l-3.614 7.794z"
                />
              </svg>
              <span className="text">Ajay Karwal</span>
            </Link>
            <nav>
              {menuLinks.map(link => (
                <Link key={link.name} to={link.link} activeClassName="active">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    );
  }
}