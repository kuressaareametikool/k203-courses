import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";
// import { fachwerk } from "http://127.0.0.1:5501/fachwerk.js";

// import * as localutils from "./utils.js";

// import Triangle from "./components/Triangle.js";

fachwerk({
  title: "GoPro360",
//   components: {
//     Triangle: Triangle
//     // "Separator": Separator,
//     // "Hedron": Hedron
//   },
  src: "index.md",
  // src: "math-pyramid.md",
  theme: "light",
  type: "slides",
  edit: "none",
  home: "..",
  menu: "show",
//   utils: localutils,
  // style: {"--accent":"var(--blue)"}
});