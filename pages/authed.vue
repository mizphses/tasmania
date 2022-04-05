<template>
  <div class="bg-gray-300 flex flex-col items-center justify-center h-screen">
    <div class="bg-white shadow rounded px-5 py-10 w-1/2">
      <h2 class="text-xl font-bold">ログインに成功しました</h2>
      <p>
        <span class="font-bold text-indigo-700">{{
          $auth.$state.user.username
        }}</span
        >さん，ようこそ。
      </p>
      <hr class="pt-2" />
      <p v-if="role == 'ccmem'">
        あなたは<span class="font-bold text-red-900"
          >CUCC会員として認証されています</span
        >。管理画面はこちらです。
      </p>
      <p v-else-if="role == 'usr'">
        あなたは<span class="font-bold text-yellow-900"
          >chuo.club ユーザとして認証されています</span
        >。管理画面はこちらです。
      </p>
      <div v-else-if="role == '404'">
        <p>
          あなたは<span class="font-bold text-yellow-600"
            >会員としての登録がされていません</span
          >。登録手続きに進みましょう。
        </p>
        <a
          :href="
            'https://docs.google.com/forms/d/e/1FAIpQLSeRxMJRajlEkEJqXbMTAa7obEuU3KUtXPCelH38Mm6Xppfppg/viewform?usp=pp_url&entry.212945027=' +
            $auth.$state.user.id
          "
          class="text-blue font-bold underline"
          >これをクリックしてください。</a
        >
      </div>
      <div v-else>
        <p>ステータス確認中...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthedPage',
  layout: 'fullscreen',
  middleware: 'auth',
  data() {
    return {
      id: this.$auth.$state.user.id,
      role: '404',
    }
  },
  async mounted() {
    const params = {
      num: this.id,
    }
    const role = await this.$axios.$get('/api2', { params })
    this.role = role
  },
}
</script>
