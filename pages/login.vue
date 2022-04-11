<template>
  <div class="bg-gray-300 flex flex-col items-center justify-center h-screen">
    <div
      class="flex flex-col items-center justify-center px-5 md:px-0 md:w-1/2 h-1/2 bg-white rounded"
    >
      <h1 class="text-2xl font-bold">ログイン認証（TASMANIA外部環境）</h1>

      <button
        v-if="authed"
        class="bg-red-500 hover:bg-red-600 text-white font-bold text-xl p-3 rounded m-2"
      >
        認証は完了しています。
      </button>
      <button
        v-else
        class="bg-gray-800 hover:bg-gray-900 text-white font-bold text-xl p-3 rounded m-2"
        @click="discordAuthenticate"
      >
        Discordで認証
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginWindow',
  layout: 'fullscreen',
  computed: {
    authed() {
      return this.$auth.loggedIn
    },
  },
  methods: {
    discordAuthenticate() {
      this.$auth.loginWith('discord')
    },
  },
})
</script>
