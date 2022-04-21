<template>
  <div>
    <Navbar :authed="false" />
    <BeforeContent />
    <div v-if="role == 'admin'">
      <div
        class="w-full py-2 px-5 flex flex-row justify-between items-center shadow-md bg-red-900 text-white font-bold mb-2"
      >
        <p>管理者であることが認証されています。</p>
      </div>
      <Nuxt />
    </div>
    <div v-else-if="role == 'usr'">
      <div
        class="bg-red-400 text-white font-bold h-80 flex flex-col justify-center items-center"
      >
        <p class="text-2xl">このページは管理者専用です。</p>
        <p>
          あなたは権限が不足しているため，このページを閲覧できません。詳細はシステム管理者にお問い合わせください。
        </p>
        <button
          class="p-3 bg-gray-100 hover:bg-gray-300 text-black rounded"
          @click="check_role_again"
        >
          遷移しない場合はもう一度試すことができます。
        </button>
      </div>
    </div>
    <div v-else>
      <div
        class="bg-green-400 text-white h-screen font-bold flex flex-col justify-center items-center"
      >
        <p class="text-2xl">LOADING</p>
        <p>権限の調査を実施中。今しばらくお待ちください。</p>
        <button
          class="p-3 bg-gray-100 hover:bg-gray-300 text-black rounded"
          @click="check_role_again"
        >
          遷移しない場合はもう一度試すことができます。
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'AdminLayout',
  middleware: 'auth',
  data() {
    return {
      role: '',
    }
  },
  async mounted() {
    const role = await this.$axios.$post('/api_server/role', {
      userid: this.$auth.$state.user.id,
    })
    this.role = role.role
  },
})
</script>
