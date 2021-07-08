<template>
  <h1 class="title-main"> This is Customer Area!!!</h1>
  <div class="card">
    <hello-world msg="It uses components from main app!"></hello-world>
  </div>

</template>

<script lang="ts">

import HelloWorld from "@/components/HelloWorld.vue"

export default {
  components: {
    HelloWorld
  }
}

</script>

<style lang="scss" scoped>
.title-main {
  color: darkblue;
}
</style>
