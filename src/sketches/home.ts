import type p5 from "p5";
import oklchToRgb from "@/utils/okLabToRgb.ts";

function homeSketch(container: HTMLDivElement) {
  const rootBackgroundColor = getComputedStyle(document.body).backgroundColor;
  const colorData = rootBackgroundColor.match(/oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\)/)
  const bgColorRGB = oklchToRgb({
    L: Number(colorData?.[1]) * 100,
    C: Number(colorData?.[2]),
    h: Number(colorData?.[3]),
  });

  return function (p: p5) {
    p.setup = () => {
      const { offsetWidth, offsetHeight } = container;
      p.createCanvas(offsetWidth, offsetHeight).parent(container);
      p.background(bgColorRGB.r, bgColorRGB.g, bgColorRGB.b);
      p.fill(100);
      p.ellipse(100, 100, 200);
      p.noLoop();
    };
  };
}

export default homeSketch;
