import {Vue, Css} from "https://designstem.github.io/fachwerk/fachwerk.js";

Vue.config.ignoredElements = [
  "a-scene", "a-cursor", "a-sky", "a-camera", "a-light", "a-entity"
];

export default {
  props: {
    src: { default: "./img/pano.jpg", type: [String] },
    rotation: { default: "0 0 0", type: [String] },
    tint: { default: "hsl(0, 100%, 100%)", type: [String] },
    animated: { default: false, type: [Boolean] },
  },
  mixins: [Css],
  // cssprops: {
  //   "--panowidth": {
  //      default: "100%",
  //      description: "Define panorama width"
  //   },
  //   "--panoheight": {
  //      default: "100%",
  //      description: "Define panorama height"
  //   },
  // },
  template: `
    <a-scene embedded>
      <a-entity id="rig" :rotation="rotation" 
        :animation="animated ? 'property: rotation; to:0 410 0; loop: true; dur: 80000;' : 'none'">  
        <a-camera fov="80" look-controls="reverseMouseDrag: true">
          <a-cursor />
        </a-camera>
      </a-entity>

      <a-sky 
        :src="src" 
        :color="tint">
      </a-sky>
      <!-- <a-light type="ambient" color="#ff0000"></a-light> -->
      <!-- <slot /> -->
    </a-scene>
  `,
  css: `
  html.a-fullscreen body{
    overflow: auto !important;
  }
  `
}