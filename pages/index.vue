<template>
  <div>
    <p v-if="!authed" class="text-xl w-full my-5 p-3 bg-gray-700 text-white">
      障害情報などはDiscord Channel:#障害情報
      をご確認ください。障害にお気づきの場合はDiscord Channel:#iss保守
      にご連絡ください。
    </p>
    <div class="px-5">
      <h2 class="text-2xl py-3 font-bold">
        <span class="font-logo"> TASMANIA </span>
        TT6事務・メンテナンスインターネットアプリケーション
      </h2>
      <AfterLoginNotice v-if="authed" :user="user" :role="role" />
      <BeforeLoginNotice v-else />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      id: 0,
      user: this.$auth.$state.user,
      role: '',
    }
  },
  computed: {
    authed() {
      if (this.$auth.loggedIn == null) {
        return false
      } else {
        return this.$auth.loggedIn
      }
    },
  },
  async mounted() {
    const params = {
      num: this.id,
    }
    const role = await this.$axios.$get('/api2', { params })
    if (role === 'admin_monolyth') {
      this.role = 'admin'
    } else if (role === 'hodokubomonorail') {
      this.role = 'user'
    } else {
      this.role = 'not_authed'
    }
    if (this.authed) {
      this.id = await this.$auth.$state.user.id
    } else {
      this.id = 0
    }
  },
})
</script>

function authed() { throw new Error('Function not implemented.') }
