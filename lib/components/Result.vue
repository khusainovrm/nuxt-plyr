<template>
  <div class="custom-counter">
    Local data: {{ result }} <br />
    Plugin options: {{ pluginOptions }}
  </div>
</template>

<script>
export default {
    data:()=>({
        result: 42
    }),
  computed: {
    pluginOptions() {
      return this._customPluginOtions || {}
    },
  }
}
</script>