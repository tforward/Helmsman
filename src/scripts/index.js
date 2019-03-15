"use strict";

import css_ from "../css/styles.css";

const myApp = Object.create(null);
// ======================================================================
// App
// ======================================================================

myApp.main = function main() {
  // Start here
  // http://randycoulman.com/blog/2016/02/16/using-ramda-with-redux/
  // https://hackernoon.com/shape-your-redux-store-like-your-database-98faa4754fd5
  // https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44
  // work on state tree
};

// Handler when the DOM is fully loaded
document.onreadystatechange = function onreadystatechange() {
  if (document.readyState === "complete") {
    myApp.main();
  } else {
    // Do something during loading [optional]
  }
};

// ======================================================================
