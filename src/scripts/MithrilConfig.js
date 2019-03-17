import m from "mithril";
import * as R from "ramda";

export function rootInit(base) {
  const myRoot = base;
  return myRoot;
}

export function mithrilRender(root) {
  // m.mount(root, canvas);
  m.render(
    root,
    m(
      "canvas",
      {
        id: "myCanvas",
        class: "canvas",
        width: 600,
        height: 400,
        onmousemove: state.draw.bind({ color: "blue" })
      },
      "canvas"
    )
  );
}

const state = {
  count: 0,
  id: null,
  canvas: null,
  inc() {
    // console.log(state.count++);
  },
  draw: function draw(e) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const drag = state.xyDrag(this, ctx, e);
    ctx.fillStyle = this.color;

    const data = drawRectInCenter(drag.x, drag.y, 10, 10);
    ctx.fillRect(...data);
  },
  xyDrag: function yDragging(args, ctx, e) {
    const rect = ctx.canvas.getBoundingClientRect();
    const ix = e.clientX - rect.left;
    const iy = e.clientY - rect.top;
    return { x: ix, y: iy };
  },
  initCanvas: function initCanvas() {
    console.log("hello");
    state.canvas = document.getElementById("mithril-container-id_1");
  }
};

function drawRectInCenter(x, y, width, height) {
  return [x - width / 2, y - height / 2, width, height];
}

const canvas = {
  view() {
    return m("div", [
      m(
        "canvas",
        {
          id: "myCanvas",
          class: "canvas",
          width: 600,
          height: 400,
          onmousemove: state.draw.bind({ color: "blue" })
        },
        "canvas"
      )
    ]);
  }
};
