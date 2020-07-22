const config = {
  siteTitle: "Ajay Karwal", // Site title.
  siteTitleShort: "Ajay Karwal", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Personal Portfolio of Ajay Karwal", // Alternative site title for SEO.
  siteFavicon: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteLogo: "/open-graph-image.png", // Logo used for SEO and manifest.
  siteUrl: "https://ajaykarwal.com", // Domain of your website without pathPrefix.
  repository: "https://github.com/ajaykarwal/ajaykarwal.com",
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Ajay Karwal is a Front-end Developer and UI Designer from Buckingham, UK.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Personal Portfolio of Ajay Karwal - RSS feed", // Title of the RSS feed
  googleAnalyticsID: "UA-16609747-8", // GA tracking ID.
  disqusShortname: "ajaykarwal", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD MMMM, YYYY", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: "Ajay Karwal", // Username to display in the author segment.
  userEmail: "ajaykarwal@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "ajaykarwal", // Optionally renders "Follow Me" in the UserInfo segment.
  userDescription:
    "I’m Ajay Karwal. I write about my experiences as a front-end developer. If you enjoy my content, please consider supporting what I do.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: {
    github: {
      label: "GitHub",
      url: "https://github.com/ajaykarwal"
    },
    twitter: {
      label: "Twitter",
      url: "https://twitter.com/ajaykarwal"
    },
    facebook: {
      label: "Facebook",
      url: "https://facebook.com/ajaykarwal"
    },
    dribbble: {
      label: "Dribbble",
      url: "https://dribbble.com/ajaykarwal"
    },
    linkedin: {
      label: "LinkedIn",
      url: "http://www.linkedin.com/in/ajaykarwal"
    },
    behance: {
      label: "Behance",
      url: "https://behance.net/ajaykarwal"
    },
    email: {
      label: "Email",
      url: "mailto:ajaykarwal@gmail.com"
    },
    rss: {
      label: "RSS",
      url: "/rss.xml"
    }
  },
  menuLinks: [
    {
      name: "Blog",
      link: "/blog/"
    },
    {
      name: "Portfolio",
      link: "/portfolio/"
    },
    {
      name: "About Me",
      link: "/about/"
    },
    // {
    //   name: "Contact",
    //   link: "/contact/"
    // }
  ],
  copyright: "Copyright © Ajay Karwal", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#44e", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff", // Used for setting manifest background color.
  lastfm: {
    apikey: "965b2342a5837db0942394bbc9a31157",
    limit: 1,
    username: "ajaykarwal",
    selector: "#lastfmStatus",
    period: "1month" // overall | 7day | 1month | 3month | 6month | 12month
  }
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
