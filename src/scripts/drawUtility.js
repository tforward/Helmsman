import * as R from "ramda";

// http://perfectionkills.com/exploring-canvas-drawing-techniques/

export function drawRectInCenter(x, y, width, height) {
  return [x - width / 2, y - height / 2, width, height];
}

function curDraw(ctx, state, e) {
  const pos = mousePos(ctx, e);
  ctx.fillStyle = state.color;
  const data = drawRectInCenter(pos.x, pos.y, 10, 10);
  ctx.fillRect(...data);
  return [ctx, state, e];
}

export const drawWithState = R.curry(curDraw);

function mousePos(ctx, e) {
  const rect = ctx.canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  return { x, y };
}

function curPencil(ctx, state, e) {
  const pos = mousePos(ctx, e);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
}

export const drawPencil = R.curry(curPencil);
