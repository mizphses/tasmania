<template>
  <div>
    <div class="px-5">
      <p class="text-2xl py-3 font-bold">管理ページ</p>
      <div class="bg-gray-800 p-4 text-white font-mono rounded">
        <p>あなたはシステム管理者から通常の講習を受けたはずです。</p>
        <p>これは通常、以下の3点に要約されます:</p>
        <p class="pl-4">#1) 他人のプライバシーを尊重すること。</p>
        <p class="pl-4">#2) タイプする前に考えること。</p>
        <p class="pl-4">#3) 大いなる力には大いなる責任が伴うこと。</p>
        <hr />
        <p>
          特に権限が必要な事項を操作する場合，管理者コード・パスワードの入力を要求することがあります。
        </p>
      </div>
      <nuxt-link to="/admin/find">
        <div
          class="p-3 my-5 border border-blue-800 hover:bg-blue-800 hover:text-white rounded"
        >
          <p class="text-2xl font-bold">人員検索</p>
        </div>
      </nuxt-link>
      <nuxt-link to="/admin/temporary-member-join">
        <div
          class="p-3 my-5 border border-green-800 hover:bg-green-800 hover:text-white rounded"
        >
          <p class="text-2xl font-bold">新歓カード処理</p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AdminIndex',
  layout: 'admin',
})
</script>
