---
template: page
title: "Versions"
slug: "versions"
---

Whenever I am learning a new programming language or CMS I tend to use my own portfolio website as a way of understanding it. Over the years this website has been built in a number of different ways and I've usually given the site a design update at the same time.

Here is an archive of previous designs with some notes on how that specific version was built.

---

## v6.0

2018-Present

{% include image.html
  file="versions/v6.jpg"
  link="self"
  alt="Version 6 of this website"
%}

For version 6, the site has stayed on Jekyll but is now hosted on [Netlify](https://www.netlify.com/) which deploys automatically when I push to the Master branch of my GitHub repo. The new design is much more stripped back with a bigger focus on written content and typography. I also stripped out jQuery, FontAwesome and switched to a [system font stack](https://css-tricks.com/snippets/css/system-font-stack/) which has masively increased the page load speeds.

## v5.1

Version 5.1 had no significant changes to the design or the content. I just rebuilt the site in [Jekyll](https://jekyllrb.com/) as having a pretty simple website as mine didn't warrant the overhead of running a CMS &mdash; especially one as heavy as Umbraco. I wrote an article about <a href="{{site.baseurl}}{% link _posts/2017-03-18-switching-from-cms-to-jekyll.md %}">switching from a CMS to Jekyll</a>.

The site was still hosted on Azure but I introduced a <a href="{{site.baseurl}}{% link _posts/2017-04-04-deploying-jekyll-using-travis-ci.md %}">continuous integration workflow using Travis CI</a>.

## v5.0

2017-2018

{% include image.html
  file="versions/v5.jpg"
  link="self"
  alt="Version 5 of this website"
%}

Version 5 stays on Umbraco and Azure but swsitched over to a light theme while keeping the basic layout as version 4.

## v4.0

2016-2017

{% include image.html
  file="versions/v4.jpg"
  link="self"
  alt="Version 4 of this website"
%}

Version 4 is was the first CMS version of the website and introduced my new [logo](https://dribbble.com/shots/2718615-Branding-logo-and-website-refresh-for-2016). I decided to build it in [Umbraco](https://umbraco.com/) as that was the platform the company I was working for at the time was using. I hosted the site on the free tier of Microsoft Azure.

## v3.0

2014-2016

{% include image.html
  file="versions/v3.jpg"
  link="self"
  alt="Version 3 of this website"
%}

For version 3 I decided to give my personal identity a [design refresh](https://dribbble.com/shots/1524996-Personal-Identity-V2) which introduced some bright colours and softer lines. This version of the site was built in PHP and included a lot more jQuery animations. I was aiming for a 'single page web app' look and feel which was the trend at the time.

## v2.0

2012-2014

{% include image.html
  file="versions/v2.jpg"
  link="self"
  alt="Version 2 of this website"
%}

Version 2 was built using ASP.NET Web Forms. It was at a point in my career where I had enough experience and enough work to showcase in a proper portfolio and I wanted to create a [personal identity](https://dribbble.com/shots/775585-Personal-Identity) for myself. The left column was fixed and took 100% height of the browser (which was still tricky to do back in 2012) while the right column scrolled.

The most significant thing about this version was that it used the (then) newly introduced HTML elements, `<header>`, `<nav>`, `<main>` and `<footer>`.

The left column is the `<header>` and the social icons at the bottom are the `<footer>` which was positioned absolute. This meant that the source code was well structured semantically while allowing the visual design to be a little less conventional.

## v1.0

2010-2012

{% include image.html
  file="versions/v1.jpg"
  link="self"
  alt="Version 1 of this website"
%}

Version 1 of the site could hardly be called a website at all. It was just a single page with some links to my profiles on various networks. I even took the liberty to make each line of text into an image becuase of the custom fonts (this was pre-webfonts) and decided to be cryptic about where each link would even take you &mdash; can you figure them out?

I didn't really have much to say about my experience at this point and my design portfolio was still quite thin.
