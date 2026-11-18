// GLSL for the hero background: a slowly flowing "molten ember" field.
// Technique: domain-warped fractal noise (fbm of fbm), see Inigo Quilez, "Domain Warping".

export const vertexShader = /* glsl */ `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

export const fragmentShader = /* glsl */ `
precision highp float;

uniform vec2  uResolution;
uniform float uTime;
uniform vec2  uMouse;     // 0..1, smoothed on the JS side
uniform float uIntensity; // 0..1, fades out while scrolling away

// --- value noise + fbm ----------------------------------------------------
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = rot * p * 2.02;
    a *= 0.5;
  }
  return v;
}

// --- palette: ink -> deep ember -> accent -> hot core -------------------
vec3 palette(float t) {
  vec3 ink    = vec3(0.051, 0.043, 0.039); // #0D0B0A
  vec3 ember  = vec3(0.23, 0.055, 0.008);
  vec3 accent = vec3(1.0, 0.353, 0.122);   // #FF5A1F
  vec3 hot    = vec3(1.0, 0.72, 0.48);
  vec3 c = mix(ink, ember, smoothstep(0.15, 0.45, t));
  c = mix(c, accent, smoothstep(0.45, 0.72, t));
  c = mix(c, hot, smoothstep(0.78, 0.98, t));
  return c;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  float aspect = uResolution.x / uResolution.y;
  vec2 p = vec2(uv.x * aspect, uv.y) * 1.6;

  float t = uTime * 0.06;
  vec2 mouse = vec2(uMouse.x * aspect, uMouse.y) * 1.6;

  // two layers of warping make the smoke curl into itself
  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3 - t)));
  vec2 toMouse = mouse - p;
  float pull = exp(-dot(toMouse, toMouse) * 1.6);
  vec2 r = vec2(fbm(p + 4.0 * q + vec2(1.7, 9.2) + t * 1.5 + toMouse * pull * 0.6),
                fbm(p + 4.0 * q + vec2(8.3, 2.8) - t));
  float f = fbm(p + 4.0 * r);

  // shape the light: strong on the right (desktop) / bottom (phone),
  // so the copy on the left stays readable
  float side = aspect > 1.0 ? smoothstep(0.15, 0.95, uv.x) : smoothstep(0.5, 0.0, uv.y);
  float shape = f * (0.55 + 0.65 * side) + pull * 0.22;
  shape = pow(clamp(shape, 0.0, 1.0), 1.4) * 1.12;

  vec3 col = palette(shape * uIntensity);

  // thin bright "filaments" where the warp folds
  float fil = smoothstep(0.02, 0.0, abs(length(r) - 0.9)) * side;
  col += vec3(1.0, 0.45, 0.18) * fil * 0.18 * uIntensity;

  // vignette into the page background
  float vig = smoothstep(0.0, 0.25, uv.y) * smoothstep(1.05, 0.6, uv.y);
  col = mix(vec3(0.051, 0.043, 0.039), col, vig);

  gl_FragColor = vec4(col, 1.0);
}
`;
