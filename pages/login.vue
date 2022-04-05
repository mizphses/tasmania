<template>
  <div class="bg-gray-300 flex flex-col items-center justify-center h-screen">
    <div
      class="flex flex-col items-center justify-center px-5 md:px-0 md:w-1/2 h-1/2 bg-white rounded"
    >
      <h1 class="text-2xl font-bold">ログイン認証（CUISINE NET外部環境）</h1>
      <button
        class="bg-gray-800 hover:bg-gray-900 text-white font-bold text-xl p-3 rounded m-2"
        @click="discordAuthenticate"
      >
        Discordで認証
      </button>
    </div>
    <!-- <button @click="googleAuthenticate">Google</button> -->
  </div>
</template>

<script>
export default {
  name: 'LoginWindow',
  layout: 'fullscreen',
  methods: {
    discordAuthenticate() {
      this.$auth.loginWith('discord')
    },
  },
}
</script>
