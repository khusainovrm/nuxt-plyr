import Vue from 'vue'
import result from './Result.vue'

const  components = { 
    result
}

// get options passed from module.js
const options = JSON.parse(`<%= JSON.stringify(options) %>`)
// loop through components and register them
for (const name in components) {
  Vue.component(name, {
    // extend the original component
    extends: components[name],
    // add a _customCounterOptions prop to gain access to the options in the component
    props: {
      _customPluginOtions: {
        type: Object,
        default: () => ({ ...options })
      }
    }
  })
}