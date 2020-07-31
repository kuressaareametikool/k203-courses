import {Css} from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  mixins: [Css],
  template: ``,
  css: `
  html.a-fullscreen {
    position: fixed;
  }
  html.a-fullscreen body{
    overflow: hidden;
  }
  `
}