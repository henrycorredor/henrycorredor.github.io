import type p5 from "p5";
import oklchToRgb from "@/utils/okLabToRgb.ts";
import illustration from "@/assets/kurilabs-homepage-illustration.jpg";

const SPACING = 10;
const R_MIN = 2;
const INFLUENCE = 1200;
const INV_INF = 1 / INFLUENCE;

const particles: { x: number; y: number; max: number }[] = [];

function homeSketch(container: HTMLDivElement) {
  const rootBackgroundColor = getComputedStyle(document.body).backgroundColor;
  const colorData = rootBackgroundColor.match(
    /oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\)/,
  );
  const bgColorRGB = oklchToRgb({
    L: Number(colorData?.[1]) * 100,
    C: Number(colorData?.[2]),
    h: Number(colorData?.[3]),
  });

  return function (p: p5) {
    p.setup = async () => {
      const { offsetWidth, offsetHeight } = container;
      p.createCanvas(offsetWidth, offsetHeight).parent(container);
      p.pixelDensity(1);
      p.background(bgColorRGB.r, bgColorRGB.g, bgColorRGB.b);

      const guidePicture = await p.loadImage(illustration.src);
      guidePicture.loadPixels();

      const aspectRatio = guidePicture.width / offsetWidth;
      const pictureHeight = Math.floor((guidePicture.height * offsetWidth) / guidePicture.width)
      const topMargin = Math.floor((offsetHeight - pictureHeight) / 2)

      particles.length = 0

      for (let y = 0; y < offsetHeight; y += SPACING) {
        const yIndex = Math.floor(aspectRatio * y - topMargin)
        for (let x = 0; x < offsetWidth; x += SPACING) {
          let red = 0;
          if(y > topMargin) {
            const idx = 4 * (Math.floor(aspectRatio * x) + yIndex * guidePicture.width);
            red = guidePicture.pixels[idx];
          }
          const max = red ? Math.ceil((SPACING * (255 - red)) / 255) : R_MIN;
          particles.push({ x, y, max });
        }
      }
      p.noStroke();
      p.fill(0);
      p.noLoop();
    };

    p.draw = () => {
      p.background(bgColorRGB.r, bgColorRGB.g, bgColorRGB.b);

      const mx = p.mouseX;
      const my = p.mouseY;

      for (let i = 0; i < particles.length; i++) {
        const pt = particles[i];
        const dx = mx - pt.x;
        const dy = my - pt.y;
        const dist = Math.hypot(dx, dy) * 2;
        const raw = Math.max(0, INFLUENCE - dist);
        const r = Math.max(R_MIN, Math.min(pt.max, raw * pt.max * INV_INF));
        p.circle(pt.x, pt.y, r);
      }
    };

    p.mouseMoved = () => p.loop();
    p.mousePressed = p.mouseMoved;
    p.mouseReleased = () => p.noLoop();
  };
}

export default homeSketch;
