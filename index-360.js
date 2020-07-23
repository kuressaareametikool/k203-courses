import {
    Vue,
    components,
    utils
  } from "https://designstem.github.io/fachwerk/fachwerk.js";
  
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
    <div>
      <!-- top menu example -->
      <!-- <div class="main-header" style="">
        <h3 style="margin:0; cursor:pointer;" v-on:click="goto('Example layout 1')"><i>Ann Täpp</i></h3>
        <nav class="main-header__nav">
          <span v-on:click="goto('Example layout 1 dark')">ABOUT</span>
          <span v-on:click="goto('Project 1')">THE OTHER</span>
          <span v-on:click="goto('Project 2')">ONE MORE</span>
        </nav>  
      </div> -->
    
      <f-fetch :src="[
          'index.md'
        ]" v-slot="{ value: content }">
        <f-content-editor type="slides" edit="none" typebutton="false" title="GoPro360" menu="show" :content="content" />
      </f-fetch>
  
      
    </div>
    `
  });