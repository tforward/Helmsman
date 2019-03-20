import m from "mithril";

import { drawWithState, drawPencil } from "./drawUtility";

import { resizeCanvasToCSS, vectorToCanvas } from "./canvasUtil";

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
      working(canvas, ctx);
      // testLine(ctx);
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

function working(canvas, ctx) {
  const vector = vectorToCanvas(canvas);
  const testLine = [200, 100];
  const vtc = vector(testLine);
  console.log(vtc);
  // drawBaseFrame(ctx, [200, 100]);
  drawShape(ctx, vector, [[0, 0], [500, 0], [0, 300]]);
}

function drawBaseFrame(ctx, origin) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(origin[0], origin[1]);
  ctx.lineTo(200, 100);
  ctx.stroke();
}

function drawShape(ctx, vector, lines) {
  let i = 0;
  const l = lines.length;
  let line;
  // ctx.beginPath();
  ctx.strokeStyle = "black";
  for (i; i < l; i += 1) {
    line = lines[i];
    console.log(vector(lines[i]));

    // ctx.moveTo.apply(ctx, vector(lines[i]));
    // ctx.lineTo.apply(ctx, vector(lines[i][1]));
    // console.log(vector([0, 0]));
    // ctx.moveTo(100, vector(lines[i][0]));
    // ctx.lineTo(100, vector(lines[i][1]));
  }
  ctx.stroke();
}

// function frame(ctx, origin, xEdge, yEdge) {
//   return { ctx, origin, xEdge, yEdge };
// }
