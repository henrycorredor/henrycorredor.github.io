/**
 * this code was taken from the package
 * https://github.com/iamlite/color-core/tree/main/packages/color-core/src
 */

type RGB = {
  r: number
  g: number
  b: number
  a?: number
}

type Oklab = {
  L: number
  a: number
  b: number
}

export type Oklch = {
  L: number
  C: number
  h: number
}

export function oklabToLinearSrgb(L: number, a: number, b: number): [number, number, number] {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;

  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;

  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  ];
}

export function linearSrgbToSrgb(x: number): number {
  // Apply the linear to sRGB conversion
  const normalized = x <= 0.0031308
    ? x * 12.92
    : 1.055 * Math.pow(x, 1 / 2.4) - 0.055;
  // Convert to 0-255 range and round
  return Math.round(Math.max(0, Math.min(255, normalized * 255)));
}

export function oklabToRgb(oklab: Oklab): RGB {
  const { L, a, b } = oklab;

  const [r_linear, g_linear, b_linear] = oklabToLinearSrgb(L, a, b);

  return {
    r: linearSrgbToSrgb(r_linear),
    g: linearSrgbToSrgb(g_linear),
    b: linearSrgbToSrgb(b_linear)
  };
}

function oklchToRgb(oklch: Oklch): RGB {
  if (typeof oklch !== 'object' || oklch === null) {
    throw new Error('Input must be an object');
  }

  const { L, C, h } = oklch;

  // Convert L and C back to decimals
  const rawL = L / 100;
  const rawC = C / 100;

  // Normalize h to be between 0 and 360
  const normalizedH = ((h % 360) + 360) % 360;

  const hRadians = (normalizedH * Math.PI) / 180;
  const a = rawC * Math.cos(hRadians);
  const b = rawC * Math.sin(hRadians);

  const oklab: Oklab = { L: rawL, a, b };
  return oklabToRgb(oklab);
}

export default oklchToRgb