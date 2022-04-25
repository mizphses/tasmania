<template>
  <div class="bg-gray-300 flex flex-col items-center justify-center h-screen">
    <BeforeContent />
    <div class="bg-white shadow rounded px-5 py-10 w-1/2 h-4/5 overflow-scroll">
      <h2 class="text-xl font-bold">登録処理</h2>
      <p>
        <span class="font-bold text-indigo-700">{{
          $auth.$state.user.username
        }}</span
        >さんの情報をこれから登録します。
      </p>
      <hr class="pt-2" />
      <div>
        <p>
          中央大学コンピュータクラブのサービス利用にあたり, 事前に<a
            href="https://github.com/mizphses/tasmania/blob/main/tos.md"
            class="underline"
            >個人情報利用方針及びTASMANIAサービス利用規約</a
          >をご確認ください。
        </p>
      </div>
      <form autocomplete="off" @submit="submit_post">
        <label class="block pt-5">
          <span class="text-gray-700">メールアドレス</span>
          <input
            v-model="registration.email"
            type="email"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="tama_office@tt6.chuo.club"
            autocomplete="new-password"
          />
        </label>
        <div class="grid grid-cols-2">
          <label class="block pt-5 pr-2">
            <span class="text-gray-700">苗字</span>
            <input
              v-model="registration.lastname"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="草野"
            />
          </label>
          <label class="block pt-5">
            <span class="text-gray-700">名前</span>
            <input
              v-model="registration.firstname"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="みどり"
            />
          </label>
        </div>
        <label class="block pt-5">
          <span class="text-gray-700">パスコード</span>
          <input
            v-model="registration.passcode"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="••••••••••••"
            autocomplete="new-password"
          />
        </label>
        <label class="block pt-5">
          <span class="text-gray-700">学籍番号</span>
          <input
            v-model="registration.student_number"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="21B2125678Q"
          />
        </label>
        <label class="block pt-5">
          <span class="text-gray-700">電話番号</span>
          <input
            v-model="registration.tel_number"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="09012345678"
          />
        </label>
        <label class="block pt-5">
          <span class="text-gray-700">住所</span>
          <textarea
            v-model="registration.address"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="東京都八王子市東中野742-1 中央大学多摩キャンパス 16384号"
          />
        </label>
        <label class="block pt-5">
          <span class="text-gray-700"
            >ここには記入しないでください（処理用）</span
          >
          <input
            v-model="registration.discord_code"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 diasbled"
          />
        </label>
        <label class="block pt-5">
          <button
            class="p-3 bg-gray-600 hover:bg-gray-700 text-white rounded"
            type="button"
            value="登録処理の実施"
            @click="submit_post"
          >
            登録処理の実施
          </button>
        </label>
      </form>
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
      role: '',
      registration: {
        email: '',
        passcode: '',
        firstname: '',
        lastname: '',
        student_number: '',
        tel_number: '',
        address: '',
        discord_code: this.$auth.$state.user.id,
      },
    }
  },
  methods: {
    async submit_post() {
      await this.$axios
        .$post('/api_server/new_user', this.registration)
        .then(() => {
          this.$router.push('/authed')
        })
        .catch((err) => {
          alert(err)
        })
    },
  },
}
</script>

<style>
form {
  font-family: 'Segoe UI', Roboto, Helvetica, 'Hiragino Sans JP', 'Meiryo UI',
    sans-serif;
}

.ime-disabled {
  ime-mode: disabled;
}
</style>
