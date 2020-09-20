import {
    Vue,
    components,
    utils
  } from "https://designstem.github.io/fachwerk/fachwerk.js";
// } from "http://127.0.0.1:5502/fachwerk.js";
  
  // Register components globally
  
  for (const name in components) {
    Vue.component(name, components[name]);
  }
  
  // If you have custom components,
  // install them here:
  //
  // import CustomComponent from "./CustomComponent.js";
  // Vue.component("custom-component", CustomComponent);
  import Panorama from "./Panorama.js";
  Vue.component("panorama", Panorama);
  
  // import StyleHack from "./StyleHack.js";
  // Vue.component("stylehack", StyleHack);
  
  // import StyleHackFp from "./StyleHackFp.js";
  // Vue.component("stylehackfp", StyleHackFp);


  // Set up a global event bus
  
  Vue.prototype.$global = new Vue({ data: { state: {} } });
  
  // Initialize VueJS
  
  new Vue({
    el: "#fachwerk",
  
    methods: {
      // Allow utils to be used in templates
      ...utils
  
      // Custom methods go here
    },
  
    data: {},
  
    template: `
    <div style="--content-padding: var(--base5)">
    
      <f-fetch :src="[
          './content/introduction.md', './content/360-photo.md', './content/360-video.md'
        ]" v-slot="{ value: content }">
        <f-content-editor 
            type="slides" 
            edit="none" 
            typebutton="false" 
            title="GoPro360" 
            menu="hide" 
            :content="content" />
      </f-fetch>
      
    </div>
    `
  });