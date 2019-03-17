"use strict";

import css_ from "../css/styles.css";
import { mithrilRender, rootInit } from "./MithrilConfig";
import m from "../../node_modules/mithril/mithril";

import { draw } from "./mapCanvas";

const myApp = Object.create(null);
// ======================================================================
// App
// ======================================================================

myApp.main = function main() {
  const mithrilContainer = document.getElementById(
    "mithril-container-id_1"
  );
  const root = rootInit(mithrilContainer);
  mithrilRender(root);
  // draw();
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
