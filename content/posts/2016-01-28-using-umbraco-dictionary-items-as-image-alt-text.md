---
template: post
date: 2016-01-28
title: "Using Umbraco Dictionary Items as image alt text"
cover: "../images/umbraco.jpg"
slug: using-umbraco-dictionary-items-as-image-alt-text
categories:
  - Tips
tags:
  - umbraco
  - dotnet
---

<img src="../images/umbraco.jpg" className="post-cover-image webfeedsFeaturedVisual" />

I was posed with a recent request to allow my content editor to edit the alt text of all the images in Umbraco to help with SEO rankings.

Out of the box, Umbraco has no straight forward way of doing this and some quick searches on Our resulted in suggestions of adding an extra text field to the Image data type. This could be an acceptable solution for single images however there are many instances on my site where i’m using the Multiple Media Picker, in which case this approach wouldn’t work.

To add to the problem, there was a requirement to make the alt tags multi-lingual – so of course, Dictionary Items come to the rescue.

Up until now, I had been setting the alt attributes of all images to use the Name property – `@image.Name`

These have all now been refactored to use a Dictionary Item which is _set as the Name property_ and fallback to the _actual Name property_ when a translation is not available, as below.

```csharp
alt="@Umbraco.Field('#' + @image.Name, altText: @image.Name)"
```
