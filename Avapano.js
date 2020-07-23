//export * from './vue-vr.js';

// export class VueVr {}
import Panorama from "./Panorama.js";


export default {
  props: {

  },
  data: () => ({
    urls: [
        './img/pano.jpg'
      ]
  }),
  components: {
    Panorama: Panorama
  },
  //mixins: [Css],
  directives: {
    //responsive: ResponsiveDirective
  },
  beforeMount(){
    
  },
  methods: {},
  // computed: {
  //   compGridArea(){
  //     const areaMap = {
  //       wide: `span ${this.rows} / span ${this.cols}`,
  //       narrow: `span ${this.rows} / 1fr`
  //     }
  //     if( window.innerWidth <= 800){
  //       return areaMap.narrow;
  //     } else {
  //       return areaMap.wide;
  //     }
  //   }
  // },
  cssprops: {
    // "--tint": {
    //   default: "0.25",
    //   description: "Define overlay opacity"
    // },
    // "--spancols": {
    //   default: "1",
    //   description: "Span columns"
    // },
    // "--spanrows": {
    //   default: "1",
    //   description: "Span rows"
    // },
    // "--image-position": {
    //   default: "50% 50%",
    //   description: "Image position"
    // },
  },
  template: `
    <div>
      <h3>teine</h3>
      <Panorama source="./img/pano.jpg">
</Panorama>
    </div>
    
  `,
  // css: `
  //   .f-wall__tile {
  //     background: red;
  //   }
  // `
}