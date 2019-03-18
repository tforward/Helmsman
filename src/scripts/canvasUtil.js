export function resizeCanvasToCSS(canvas) {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  return canvas;
}
