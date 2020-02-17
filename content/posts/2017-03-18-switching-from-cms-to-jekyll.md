---
template: post
date: 2017-03-18
title: "Switching from a CMS to Jekyll"
featuredImage: "../images/switching-to-jekyll.jpg"
slug: switching-from-cms-to-jekyll
categories:
  - Tutorial
  - Popular
tags:
  - jekyll
  - umbraco
---

Back in February, I shipped a new version of my website. Only a very slight update to the design but a complete overhaul on how it was built.

<blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">&quot;New&quot; version of my website is now live. <a href="https://t.co/3lnJDCSY9S">https://t.co/3lnJDCSY9S</a><br>Content is the same(ish) but its been rebuilt using <a href="https://twitter.com/jekyllrb">@jekyllrb</a> &amp; <a href="https://twitter.com/travisci">@travisci</a></p>&mdash; Ajay Karwal (@ajaykarwal) <a href="https://twitter.com/ajaykarwal/status/829825398385082368">9 February 2017</a></blockquote>

Everything was originally built using [Umbraco](https://umbraco.com/) – a <abbr title="Content Management System">CMS</abbr> powered by .NET – and hosted on Microsoft Azure. This setup of course was reliant on Windows for developement.

I'm a Mac user so in order for me to update my website I needed to run Windows in VMmare Fusion, fire up the project in Visual Studio, setup my localhost and IIS Express, log into the Umbraco dashboard and then make my updates.

When it came to deploying my changes, I would then have to FTP my Views, DocumentTypes (Templates), DataTypes, DLLs and static assets.

Just kill me now. 😭

## Up steps Jekyll

I first heard about [Jekyll](https://jekyllrb.com/) and other <abbr title="Static Site Generator">SSG</abbr>s on the [Toolsday podcast](http://www.toolsday.io/episodes/static-site-gens.html) (exactly one year before I launched my site update) and it had been on my _'things-I-want-to-try-one-day'_ list ever since.

I started by creating a blank Jekyll site.

```shell
jekyll new myblog --blank
```

If you follow the [quick-start guide](https://jekyllrb.com/docs/quickstart/) you end up with a simple blog theme which I didn't want as I was going to be importing my existing design.

The problem with this process is that the command `bundle exec jekyll serve` won't work as the installation doesn't have a `Gemfile` or a `_config.yml` file. More on this later.

Once installed, Jekyll creates the basic folder structure required to organise your site.

```
├── _drafts
├── _layouts
├── _posts
└── index.html
```

Notice how the folders begin with an underscore. Any folders named this way are not outputted to the compiled `_site` folder.

## Migrating my content

I started by coping over all my Views from my Umbraco project into my Jekyll `_layouts` folder. Luckily both systems use similar concepts of layout templates, page templates and partial views (`_includes` in Jekyll), so it was relatively painless to get my file structure right.

Next I converted my View logic from C#/Razor into [Liquid](https://shopify.github.io/liquid/), the templating engine that Jekyll uses (which was developed by Shopify). All of the logic has a like-for-like replacement as my site wasn't doing anything too complex.

Jekyll has Sass pre-processing built in so it was just a case of copying over my sass folder and adding an underscore to have it ignored from the build. I continued to add the remainder of my assets, includes and templates. You can see the full site structure on my [GitHub repository](https://github.com/ajaykarwal/portfolio).

## Where the magic happens

The most important files you will need to create are a `Gemfile` and a `_config.yml` file in your project root.

The `Gemfile` lists any Ruby Gems which are needed to build your project. At the very least this file should contain,

```ruby
source 'https://rubygems.org'
gem 'jekyll'
```

The `_config.yml` file is where the magic happens. It contains all the site settings and you can add any custom settings which are then available to your liquid templates using `{%raw%}{{ site.SETTING_NAME }}{%endraw%}`. You can use [my config file](https://github.com/ajaykarwal/portfolio/blob/master/_config.yml) as a template for your own project or follow the [Jekyll documentation](https://jekyllrb.com/docs/configuration/).

## Building your static site

Now that the basic file and folder structure is in place, simply run,

```
bundle exec jekyll serve --watch
```

This will bundle any Ruby Gems defined in your `Gemfile`, generate your static files to a `_site` folder, serve up your site on `localhost:4000` and watch for any changes you make from now on.

That's it, you're done.

Congratulations on converting your CMS driven website to a static website powered by Jekyll. 🎉

## Conclusion

Overall the process of moving from Umbraco to Jekyll was relatively simple. The documentation is very clear and there is plenty of support available on Stack Overflow for scenarios where custom logic is required in your Liquid templates.

Every use case is going to be different so take this with a pinch of salt, but the over-arching pros and cons which I feel would apply to all are:

### Pros

- The output is just static HTML, CSS and JavaScript so the resulting site loads extemely fast. It can also take advantage of browser caching to make return visits even more rapid.
- No complex hosting package or server-side processing is required which could dramatically reduce the cost of running your website. You can even host it for free via [GitHub Pages](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/).
- Writing your content in Markdown results in clean, semantic markup and encourages a more structured approach to your content.

### Cons

- There is a dependency of using the command-line to generate your site each time you make an edit, so some development expertise is needed. This means Jekyll is probably not a great solution for a client project where content is being managed by the client themselves.
- Not really suited for sites which are updated very frequently.

## Final thoughts

I would highly recommend that you try out Jekyll. Set up a test project and get a feel for how the content is structured. The Liquid templating engine is a joy to work with and has a very low barrier to entry.

If you're using Jekyll for your website, I'd love to hear about your experiences.
