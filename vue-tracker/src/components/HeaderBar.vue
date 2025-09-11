<script setup lang="ts">
  import { LogOutIcon, ArrowRightFromLine } from 'lucide-vue-next'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  function handleLogout () {
    localStorage.removeItem('isLoggedIn')
    router.push('/')
  }
</script>

<template>
  <v-app-bar class="ps-4 text-red-400 !bg-gray-900" flat>
    <v-app-bar-title class="!text-red-500 font-bold">This the header bar eh</v-app-bar-title>
    <v-btn
      :append-inner-icon="LogOutIcon"
      class="!bg-red-500"
      icon
      variant="flat"
      @click="handleLogout"
    >
      <ArrowRightFromLine />
    </v-btn>
  </v-app-bar>
</template>
