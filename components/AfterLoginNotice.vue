<template>
  <div
    class="border border-indigo-800 rounded p-5 flex flex-column items-center"
  >
    <div class="w-3/4">
      <p class="text-xl font-bold">認証情報</p>
      <p>
        Discord ユーザ情報:
        {{ user.username }}#{{ user.discriminator }}
      </p>
      <p>権限コード: {{ role }}</p>
    </div>
    <div>
      <button class="bg-green-600 hover:bg-green-700 text-white p-3 rounded">
        権限付与
      </button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'AuthedInfo',
  props: {
    user: {
      type: Object,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
})
</script>
