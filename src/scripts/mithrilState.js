import m from "mithril";

import { drawWithState, drawPencil } from "./drawUtility";

import { resizeCanvasToCSS } from "./canvasUtil";

// https://vegibit.com/mithril-javascript-tutorial/#mithril-components-and-views

export function rootInit(base) {
  const myRoot = base;
  return myRoot;
}

export function mithrilRender(root) {
  m.mount(root, canvasWithState);
}

function canvasWithState() {
  const state = { color: "red" };
  let draw;
  let pencil;

  return {
    oninit() {},
    oncreate() {
      const canvas = document.getElementById("myCanvas");
      const ctx = canvas.getContext("2d");
      resizeCanvasToCSS(canvas);
      draw = drawWithState(ctx, state);
      pencil = drawPencil(ctx, state);
    },
    view() {
      return m("div", [
        m(
          "canvas",
          {
            id: "myCanvas",
            class: "canvas",
            onmousemove(e) {
              pencil(e);
            }
          },
          "canvas"
        )
      ]);
    }
  };
}
