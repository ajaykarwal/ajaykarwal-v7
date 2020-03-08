---
template: post
date: 2019-04-01
title: "Uninstall Node.js and install Node Version Manager (NVM)"
cover: "../images/node-to-nvm.jpg"
slug: uninstall-node-and-install-nvm
categories:
  - Code
  - Popular
tags:
  - node
  - nvm
  - node version manager
  - javascript
---

When trying to install some npm packages globally, for example `npm i gulp-cli -g` you may run into a permissions error along the lines of:

```shell
npm ERR! Error: EACCES: permission denied
```

A lot of answers on Stack Overflow and the like may tell you to add `sudo` to your command &mdash; that magical little word that grants you super powers to do whatever you want &mdash; but with great power comes great responsibility.

Rather than messing with permissions of your global `/node_modules/` folder, you can install [Node Version Manager](https://github.com/creationix/nvm) to install multiple versions of Node, but more importantly you can now install packages globally without the need to overrite permissions.

## 1. Make a note of your current globally installed packages.

This lists all of the top level installed packages. You'll want to install some/all of these again once we're done.

```shell
$ sudo npm list -g --depth=0
```

## 2. Remove Node, NMP and all top-level global packages

Once you're ready, run this command to remove any top-level global npm packages.

```shell
$ sudo npm list -g --depth=0 | awk -F ' ' '{print $2}' | awk -F '@' '{print $1}'  | sudo xargs npm remove -g
```

- `sudo npm list -g --depth=0.` lists all top-level installed
- `awk -F ' ' '{print $2}'` gets rid of `├──`
- `awk -F '@' '{print $1}'` gets the part before the '@'
- `sudo xargs npm remove -g` removes the package globally

## 3. Install Node Version Manager

Simply follow the installation instructions at [github.com/creationix/nvm](https://github.com/creationix/nvm#installation-and-update).

This _should_ install Node Version Manager to `~/.nvm` and add the source line to your profile (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`).

**Note:** You'll need to reload your terminal for changes to be reflected. Either Quit the app and re-launch or run `source ~/.bash_profile`.

Verify that Node Version Manager is now installed.

```shell
$ nvm --version
```

If you get an error, you can manually set the NVM source in your profile by adding the following to your `~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc` file.

```shell
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

## 4. Reinstall Node and NPM

You can now install Node using the `nvm` command. This will install the latest version.

```
$ nvm install node
```

For a specific version of node, just use the version number:

```shell
$ nvm install 10.10.0
```

_Reload terminal again..._

## 5. Verify all the things

Verify that you have the desired version of Node and NPM installed, and start enjoying a _`sudo`-less_ world of global npm packages. 🙌🏼

```shell
$ npm -v
$ node -v
```
