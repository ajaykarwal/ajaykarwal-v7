---
template: post
date: 2019-04-29
title: "Add spaces to the Dock in macOS"
cover: "../images/dock-spaces.jpg"
slug: add-spaces-to-macos-dock
categories:
  - Tips
tags:
  - macos
  - terminal
---

<img src="../images/dock-spaces.jpg" className="post-cover-image webfeedsFeaturedVisual" />

If you want to take greater control of how apps are organised on your macOS Dock, a great way is to add spaces between groups of apps.

Run this one-liner in your Terminal to create a new blank space in your Dock

```shell
defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}' && killall Dock
```

What this does is add a new 'spacer-tile' item to the Dock's 'persistent apps' array &mdash; the list of apps which are permanently in the Dock &mdash; and then reloads the Dock.

The new space will be added to the end of the Dock. Of course it's invisible so the best way to confirm it's there is to open any other app which isn't currently in your Dock. You should now see a space which you can drag into the desired position.

To create more spaces, just run the command again.

Here is what my Dock looks like. I like to group my apps by function.

![](content/images/macos-dock.png)
