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
// TODO: FIX INTRO!
// import Intro from "./intro.js";
// Vue.component("intro", Intro);

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
          './content/01_intro.md', 
          './content/02_modelling.md', 
          './content/03_materials.md', 
          './content/04_lighting_and_camera.md', 
          './content/05_rendering_and_animation.md', 
          './content/06_physics.md', 
          './content/07_printing.md'
        ]" v-slot="{ value: content }">
        <f-content-editor 
            type="slides" 
            edit="none" 
            typebutton="false" 
            title="3Dgraafika" 
            menu="show" 
            :content="content" />
      </f-fetch>
      
    </div>
    `
});


