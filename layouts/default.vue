<template>
  <div>
    <Navbar :authed="false" />
    <BeforeContent />
    <Nuxt />
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'DefaultLayout',
})
</script>
