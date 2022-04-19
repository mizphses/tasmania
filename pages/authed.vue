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
      <p v-if="role == 'member'">
        あなたは<span class="font-bold text-red-900"
          >CUCC会員として認証されています</span
        >。管理画面はこちらです。
      </p>
      <p v-if="role == 'admin'">
        あなたは<span class="font-bold text-green-900"
          >管理者として認証されています</span
        >。管理画面は<nuxt-link to="/" class="text-blue underline font-bold"
          >こちら</nuxt-link
        >です。
      </p>
      <p v-else-if="role == 'user'">
        あなたは<span class="font-bold text-yellow-900"
          >chuo.club ユーザとして認証されています</span
        >。管理画面は
        <nuxt-link to="/" class="text-blue underline font-bold"
          >こちら</nuxt-link
        >です。
      </p>
      <div v-else-if="role == '404'">
        <p>
          あなたは<span class="font-bold text-yellow-600"
            >会員としての登録がされていません</span
          >。登録手続きに進みましょう。
        </p>
        <nuxt-link to="/registration" class="text-blue font-bold underline"
          >これをクリックしてください。</nuxt-link
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
      role: '',
    }
  },
  async mounted() {
    const role = await this.$axios.$get('/api_server/role')
    this.role = role.role
  },
}
</script>
