<template>
  <div>
    <p v-if="!authed" class="text-xl w-full my-5 p-3 bg-gray-700 text-white">
      障害情報などはDiscord Channel:#障害情報
      をご確認ください。障害にお気づきの場合はDiscord Channel:#tasmania保守
      にご連絡ください。
    </p>
    <div class="px-5">
      <h2 class="text-2xl py-3 font-bold">フロントページ</h2>
      <AfterLoginNotice v-if="authed" :user="user" :role="role" />
      <BeforeLoginNotice v-else />
      <div v-if="$auth.loggedIn == true" class="py-10">
        <!-- All Users -->
        <div class="py-10">
          <a href="//office.chuo.club">
            <div
              class="p-3 my-2 border border-red-800 hover:bg-red-800 hover:text-white rounded"
            >
              <p class="text-2xl font-bold">Nextcloud(ファイル共有・Office)</p>
            </div>
          </a>
        </div>
        <!-- Admin Area -->
        <nuxt-link v-if="role === 'admin'" to="/admin/">
          <div
            class="p-3 my-2 border border-red-800 hover:bg-red-800 hover:text-white rounded"
          >
            <p class="text-2xl font-bold">管理画面</p>
          </div>
        </nuxt-link>
      </div>
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
    if (this.authed) {
      this.id = await this.$auth.$state.user.id
    } else {
      this.id = 0
    }

    if (this.authed) {
      const role = await this.$axios.$post('/api_server/role', {
        userid: this.$auth.$state.user.id,
      })
      this.role = role.role
    }
  },
})
</script>
