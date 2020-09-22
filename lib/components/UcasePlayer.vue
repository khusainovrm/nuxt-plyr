<template>
<div class="plyr__video-embed" id="player" ref="ucasePlayer">
  <iframe
    src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
    allowfullscreen
    allowtransparency
    allow="autoplay"
  ></iframe>
</div>
</template>

<script>
  import Plyr from 'plyr'
  export default {
    name: 'VuePlyr',
    props: {
      /** Options object for plyr config. **/
      options: {
        type: Object,
        required: false,
        default () {
          return {}
        }
      },
      /** Array of events to emit from the plyr object **/
      emit: {
        type: Array,
        required: false,
        default () { return [] }
      }
    },
    data () {
      return {
        player: {}
      }
    },
    computed: {
      opts () {
        const options = this.options
        if (!this.options.hasOwnProperty('hideYouTubeDOMError')) {
          options.hideYouTubeDOMError = true
        }
        return options
      },
      pluginOptions(){
        return this._customPluginOtions
      }
    },
    mounted () {
      console.log('Props given in component: ', this.options)
      console.log('Props given in PluginOtions: ', this.pluginOptions)
      
      this.player = new Plyr(this.$refs.ucasePlayer, this.opts)

      this.emit.forEach(element => {
        this.player.on(element, this.emitPlayerEvent)
      })
    },
    beforeDestroy () {
      try {
        this.player.destroy()
      } catch (e) {
        if (!(this.opts.hideYouTubeDOMError && e.message === 'The YouTube player is not attached to the DOM.')) {
          // eslint-disable-next-line no-console
          console.error(e)
        }
      }
    },
    methods: {
      emitPlayerEvent (event) {
        this.$emit(event.type, event)
      }
    }
  }
</script>
