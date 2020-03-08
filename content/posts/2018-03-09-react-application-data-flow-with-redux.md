---
template: post
date: 2018-03-09
title: "React Application Data Flow with Redux"
cover: "../images/react-and-redux.jpg"
slug: react-application-data-flow-with-redux
categories:
  - Code
tags:
  - react
  - redux
  - javascript
---

This is a brief overview of the main elements of a React application's data flow with Redux. This article assumes you are familiar with at least the basics of React.

## Store

The Store is a combination of all the State objects from each Component in the application. The Store is a single JavaScript object so all the State objects in the application must be combined into one large one using `combineReducers()`

File: `~/reducers/index.js`

```javascript
import { combineReducers } from "redux";

import posts from "./posts";
import comments from "./comments";

const rootReducer = combineReducers({
  posts,
  comments
});

export default rootReducer;
```

In this example we are importing the `posts` and `comments` reducers and combining them into a new `rootReducer` which is exported to our application ready to be picked up by the Provider.

## Provider

A Provider receives the application's data from the Store and makes it available to all the Containers.

```javascript
import { createStore } from "redux";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer);

const application = (
  <Provider store={store}>
    <Main />
  </Provider>
);

render(application, document.getElementById("root"));
```

By wrapping the `<Main />` Container in a Provider, all of the applications data (the Store) is now available to all the children of the Provider.

## Container

Containers are a gateway between State and Components. They take a piece of State from the Store and pass it into a Component as props using the `mapStateToProps()` method.

File: `/components/App.js`

```javascript
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Main from "./Main";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

const App = connect(mapStateToProps)(Main);

export default App;
```

The `mapStateToProps()` method accepts the state and returns only the relevant bits of state we need.

The `connect()` method then attaches this new state object as props to the (imported) Main component.

## Components

These are simply the UI components which are rendered to the DOM. I'm not going to go into the specifics of a Component here as this is an assumed prerequisite.

## Action / Action Creator

An Action Creator is simply a function which returns an Action, such as submitting a form, clicking a link, or adjusting a slider.

The returned Action has at least two parts, the `type` and the `payload`.

_Note: The `type` property must use the key 'type' whereas the `payload` and any other properties can be named as you wish._

File: `actions.js`

```javascript
export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    payload: {
      postId,
      author,
      comment
    }
  };
}
```

Here the `addComment()` Action Creator returns the `ADD_COMMENT` Action.

In order to use the Action, it must be passed in as a prop to our Component, similar to how a Container passes State to the Component.

This is done using the `mapDispatchToProps()` method

File: `/components/App.js`

```javascript
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
```

Here the `mapDispatchToProps()` method returns all of the Action Creators wrapped into a dispatch via the `bindActionCreators()` method, so they can be invoked directly.

These are also passed as props to the Main component via the `connect()` method.

## Reducers

Reducers are functions which update the application's state in response to Actions.

Actions announce that something has been triggered and Reducers respond to this by describing how the state changes.

When an Action is dispatched, **it is sent to all Reducers** so it is the Reducer's job to determine if it needs to do anything with the dispatched action.

A simple `switch` statement is used to filter the required Actions.

File: `/reducers/comments.js`

```javascript
function postComments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      // handle the ADD_COMMENT payload and modify state
      return state;
    case "REMOVE_COMMENT":
      // handle the REMOVE_COMMENT payload and modify state
      return state;
    default:
      return state;
  }
  return state;
}
```

In this example the `postComments()` Reducer handles only the dispatched Actions it is concerned with and modifies the state accordingly before returning the state to the Store.

## Rinse and Repeat

Our applications State (the Store) has now been updated based on the Actions which were dispatched to the Reducers and now the Provider can pass this state onto all our Containers which will in turn update our Components and render these changes to the DOM.

---

## References

[React / Redux Tutorial](https://youtu.be/DiLVAXlVYR0) by The New Boston

Code samples are paraphrased from '[React for Beginners](https://reactforbeginners.com)' by Wes Bos
