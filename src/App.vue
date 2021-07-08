<template>
  <component :is="'layout-' + layoutName" v-if="layoutName"></component>
</template>

<script lang="ts">

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import LayoutMain from './layout/LayoutMain/index.vue'
import LayoutAbout from './layout/LayoutAbout/index.vue'

export default {

  components: {
    LayoutMain,
    LayoutAbout
  },

  setup() {
    const route = useRoute()

    return {
      layoutName: computed(() => route.meta.layout)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
