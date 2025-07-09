import type p5 from "p5"
import oklchToRgb from "@/utils/okLabToRgb.ts"
import illustration from "@/assets/kurilabs-homepage-illustration.jpg"

const SPACING = 10
const R_MIN = 2
const INFLUENCE = 1200
const INV_INF = 1 / INFLUENCE

let particles: { x: number; y: number; max: number }[] = []
let guidePicture: p5.Image | null

const rootBackgroundColor = getComputedStyle(document.body).backgroundColor
const colorData = rootBackgroundColor.match(
  /oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\)/,
)

const bgColorRGB = oklchToRgb({
  L: Number(colorData?.[1]) * 100,
  C: Number(colorData?.[2]),
  h: Number(colorData?.[3]),
})

const particleColor = oklchToRgb({
  L: (Number(colorData?.[1]) * 100) - 20,
  C: Number(colorData?.[2]),
  h: Number(colorData?.[3]),
})

async function loadGuidePicture(p: p5) {
  if (!guidePicture) {
    guidePicture = await p.loadImage(illustration.src)
    guidePicture.loadPixels()
  }
}

function computeParticles(width: number, height: number) {
  if (!guidePicture) return []

  const aspectRatio = guidePicture.width / width

  const pictureHeight = Math.ceil(
    (guidePicture.height * width) / guidePicture.width,
  )

  const topMargin = Math.floor((height - pictureHeight) / 2)

  const newParticles = []
  for (let y = 0; y < height; y += SPACING) {
    if (y < topMargin || y > topMargin + pictureHeight) {
      for (let x = 0; x < width; x += SPACING) {
        newParticles.push({ x, y, max: R_MIN })
      }
    } else {
      const yIndex = Math.floor(aspectRatio * (y - topMargin))
      for (let x = 0; x < width; x += SPACING) {
        let red = 0
        const idx =
          4 * (Math.floor(aspectRatio * x) + yIndex * guidePicture.width)
        red = guidePicture.pixels[idx]

        const max = red ? Math.ceil((SPACING * (255 - red)) / 255) : R_MIN
        newParticles.push({ x, y, max })
      }
    }
  }
  return newParticles
}

async function setup(p: p5, container: HTMLDivElement) {
  container.innerHTML = ""
  const { offsetWidth, offsetHeight } = container
  p.createCanvas(offsetWidth, offsetHeight).parent(container)
  p.pixelDensity(1)
  p.background(bgColorRGB.r, bgColorRGB.g, bgColorRGB.b)

  await loadGuidePicture(p)
  particles = computeParticles(offsetWidth, offsetHeight)

  p.noStroke()
  p.fill(particleColor.r, particleColor.g, particleColor.b)
  p.noLoop()
}

function homeSketch(container: HTMLDivElement) {
  return function (p: p5) {
    p.setup = async () => {
      await setup(p, container)
    }

    p.draw = () => {
      p.background(bgColorRGB.r, bgColorRGB.g, bgColorRGB.b)

      const mx = p.mouseX
      const my = p.mouseY

      for (let i = 0; i < particles.length; i++) {
        const pt = particles[i]
        const dx = mx - pt.x
        const dy = my - pt.y
        const dist = Math.hypot(dx, dy) * 2
        const raw = Math.max(0, INFLUENCE - dist)
        const r = Math.max(R_MIN, Math.min(pt.max, raw * pt.max * INV_INF))
        p.circle(pt.x, pt.y, r)
      }
    }

    p.mouseMoved = () => p.loop()
    p.mousePressed = p.mouseMoved
    p.mouseReleased = () => p.noLoop()
    p.windowResized = async () => {
      await setup(p, container)
    }
  }
}

export default homeSketch
