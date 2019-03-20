import * as R from "ramda";

export function resizeCanvasToCSS(canvas) {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  return canvas;
}

function curVectorToCanvas(canvas, vector) {
  return [vector[0], canvas.height - vector[1]];
}

export const vectorToCanvas = R.curry(curVectorToCanvas);
