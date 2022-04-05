<template>
  <div>
    <Navbar :authed="false" />
    <Nuxt />
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'FullscreenLayout',
})
</script>
