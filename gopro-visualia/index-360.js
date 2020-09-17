import { visualia } from "https://visualia.github.io/visualia/dist/visualia.js";
import Panorama from "./Panorama.js";
import StyleHack from "./StyleHack.js";
import StyleHackFp from "./StyleHackFp.js";

  // Register components globally
  
  // for (const name in components) {
  //   Vue.component(name, components[name]);
  // }
  

  // import Panorama from "./Panorama.js";
  // Vue.component("panorama", Panorama);
  
  // import StyleHack from "./StyleHack.js";
  // Vue.component("stylehack", StyleHack);
  
  // import StyleHackFp from "./StyleHackFp.js";
  // Vue.component("stylehackfp", StyleHackFp);


  visualia({
    components: { Panorama, StyleHack, StyleHackFp }
  });

  // Set up a global event bus
  
  // Vue.prototype.$global = new Vue({ data: { state: {} } });
  
  // new Vue({
  //   el: "#fachwerk",
  
  //   methods: {
  //     // Allow utils to be used in templates
  //     ...utils
  
  //     // Custom methods go here
  //   },
  
  //   data: {},
  
  //   template: `
  //   <div>
  //     <!-- top menu example -->
  //     <!-- <div class="main-header" style="">
  //       <h3 style="margin:0; cursor:pointer;" v-on:click="goto('Example layout 1')"><i>Ann Täpp</i></h3>
  //       <nav class="main-header__nav">
  //         <span v-on:click="goto('Example layout 1 dark')">ABOUT</span>
  //         <span v-on:click="goto('Project 1')">THE OTHER</span>
  //         <span v-on:click="goto('Project 2')">ONE MORE</span>
  //       </nav>  
  //     </div> -->
    
  //     <f-fetch :src="[
  //         'index.md', '360-photo.md'
  //       ]" v-slot="{ value: content }">
  //       <f-content-editor 
  //           type="slides" 
  //           edit="none" 
  //           typebutton="false" 
  //           title="GoPro360" 
  //           menu="show" 
  //           :content="content" />
  //     </f-fetch>
  
      
  //   </div>
  //   `
  // });