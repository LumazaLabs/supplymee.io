import createGlobe from "https://cdn.skypack.dev/cobe";

let phi = 0;
let canvas = document.getElementById("cobe");

const globe = createGlobe(canvas, {
  devicePixelRatio: 2,
  width: 1300,
  height: 1300,
  phi: 0,
  theta: 0,
  dark: 0,
  diffuse: 1.3,
  scale: 1,
  mapSamples: 20000,
  mapBrightness: 6,
  baseColor: [1, 1, 1],
  markerColor: [255, 255, 255],
  glowColor: [1, 1, 1],
  offset: [10, -4],
  markers: [
    { location: [-30.227168, 30.11428856], size: 0.03 },
    { location: [40.7128, -74.006], size: 0.05 },
  ],
  onRender: (state) => {
    // Called on every animation frame.
    // `state` will be an empty object, return updated params.
    state.phi = phi;
    phi += 0.01;
  },
});
