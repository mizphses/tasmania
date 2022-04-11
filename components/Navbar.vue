<template>
  <div
    class="w-full py-2 px-5 flex flex-row justify-between items-center shadow-md fixed bg-blue-200"
  >
    <NuxtLink to="/">
      <div class="flex flex-row items-center">
        <p class="font-bold text-2xl font-logo pr-2">TASMANIA</p>
      </div>
    </NuxtLink>
    <div>
      <button
        v-if="authed"
        class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
        @click="logout"
      >
        ログアウト
      </button>
      <button
        v-else
        class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        @click="goLogin"
      >
        ログイン
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavigationBar',
  computed: {
    authed() {
      return this.$auth.loggedIn
    },
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
    goLogin() {
      this.$router.push('/login')
    },
  },
})
</script>
