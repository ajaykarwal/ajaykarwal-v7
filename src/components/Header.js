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
        <Link to="/" className="site-logo">
          <svg width="50" height="50">
            <path
              fill-rule="evenodd"
              d="M25 50C11.1929 50 0 38.8071 0 25S11.1929 0 25 0s25 11.1929 25 25-11.1929 25-25 25zm-.993-26.536l3.8926-8.3598a.6396.6396 0 0 0 0-.5427l-2.281-4.8978a.6583.6583 0 0 0-.5958-.378.6583.6583 0 0 0-.596.378l-7.5834 16.2895a.6456.6456 0 0 0 .2998.851l19.7636 9.8643a.6536.6536 0 0 0 .7488-.1091.6507.6507 0 0 0 .1423-.742l-2.7961-6.0042a.6521.6521 0 0 0-.2998-.3075l-10.3952-5.1906a.6456.6456 0 0 1-.2998-.8511zM12.202 35.8124a.6566.6566 0 0 0 .143.7467.6514.6514 0 0 0 .7503.1081l9.5147-4.814a.6498.6498 0 0 0 .3598-.5819.6498.6498 0 0 0-.3598-.582L16.699 27.723a.6575.6575 0 0 0-.8833.2954l-3.6136 7.7941z"
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
      </header>
    );
  }
}
