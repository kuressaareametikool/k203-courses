import {Css} from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  props: {
    tint: { default: "hsl(0, 100%, 100%)", type: [String] },
  },
  mixins: [Css],
  template: ``,
  css: `
  html.a-fullscreen {
    position: relative;
  }
  html.a-fullscreen body{
    overflow: auto !important;
  }
  `
}