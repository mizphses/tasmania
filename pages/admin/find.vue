<template>
  <div class="bg-blue-900 h-screen flex flex-col justify-center">
    <div class="px-5">
      <h2 class="text-3xl text-white">会員情報検索（詳細）</h2>
      <p class="text-white">
        このシステムからは会員の詳細な個人情報（例：学籍番号，住所，氏名など）が把握できます。すべてのアクセスログは記録されています。個人情報取扱事業者としての自覚を持ち，不正に利用しないでください。
      </p>
      <form>
        <div class="grid grid-cols-2">
          <label class="block pt-5 pr-2">
            <span class="text-white">苗字</span>
            <input
              v-model="find.lastname"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="草野"
            />
          </label>
          <label class="block pt-5">
            <span class="text-white">名前</span>
            <input
              v-model="find.firstname"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="緑"
            />
          </label>
        </div>
        <button
          class="bg-white hover:bg-gray-200 py-2 px-3 mt-3 rounded"
          @click="submit_post()"
        >
          検索の実施
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NewMemberJoin',
  layout: 'fullscreen_admin',
  data() {
    return {
      find: {
        first_name: '',
        last_name: '',
        searcher_id: this.$auth.$state.user.id,
      },
    }
  },
  methods: {
    async submit_post() {
      await this.$axios.$post('/api_server/find', this.find)
    },
  },
})
</script>
