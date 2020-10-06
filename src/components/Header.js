import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const Header = ({ menuLinks }) => {
  const viewportWidth = useWindowSize().width;
  const [showNav, setShowNav] = useState(false);
  const [isDesktop, setIsDesktop] = useState(undefined);

  const handleClick = e => {
    e.preventDefault();
    setShowNav(prevState => !prevState);
  };

  useEffect(() => {
    if (viewportWidth > 768) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [viewportWidth]);

  return (
    <header role="banner" className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/" className="header__logo no-hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              className="icon"
              width="50"
            >
              <path
                fillRule="evenodd"
                d="M25 50C11.193 50 0 38.807 0 25S11.193 0 25 0s25 11.193 25 25-11.193 25-25 25zm-.993-26.536l3.893-8.36a.64.64 0 000-.543l-2.281-4.897a.658.658 0 00-.596-.378.658.658 0 00-.596.378l-7.584 16.29a.646.646 0 00.3.85l19.764 9.864a.654.654 0 00.749-.109.65.65 0 00.142-.742l-2.796-6.004a.652.652 0 00-.3-.307l-10.395-5.19a.646.646 0 01-.3-.852zM12.202 35.812a.657.657 0 00.143.747.651.651 0 00.75.108l9.515-4.814a.65.65 0 00.36-.582.65.65 0 00-.36-.582l-5.911-2.966a.657.657 0 00-.883.295l-3.614 7.794z"
              />
            </svg>
            <span className="text">Ajay Karwal</span>
          </Link>

          <button
            className={`nav-toggle ${!isDesktop ? "show" : ""} ${
              showNav ? "open" : ""
            }`}
            onClick={handleClick}
          >
            <span />
            <span />
            <span />
            <span />
          </button>

          <nav
            role="navigation"
            className={`nav-container desktop ${isDesktop ? "show" : ""}`}
          >
            <ul className="unstyled">
              {menuLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.link} activeClassName="active">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav
            role="navigation"
            className={`nav-container mobile ${
              !isDesktop && showNav ? "show" : ""
            }`}
          >
            <ul className="unstyled">
              {menuLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.link} activeClassName="active">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
