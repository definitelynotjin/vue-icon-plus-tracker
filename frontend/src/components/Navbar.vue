<script setup>
  import { LogOutIcon } from 'lucide-vue-next'
  import { useRoute, useRouter } from 'vue-router'

  const router = useRouter()
  const route = useRoute()

  function handleLogout() {
    localStorage.removeItem('isLoggedIn')
    router.push('/')
  }

  const dynamicTitle = computed(() => {
    if (!route.name) return 'Whoops'
    return String(route.name)
      .replace(/[-/]/g, ' ')
      .replace(/\b\w /g, (l) => l.toUpperCase())
  })
</script>

<template>
  <v-app-bar app class="!bg-gray-800" height="80">
    <v-app-bar-title class="font-semibold pl-5 text-h4">{{ dynamicTitle }}</v-app-bar-title>
    <div class="d-flex align-center pa-4" />
    <v-spacer />
    <v-btn
      :append-icon="LogOutIcon"
      class="!text-white bg-red-500 mr-5"
      variant="flat"
      :width="100"
      @click="handleLogout"
    />
  </v-app-bar>
</template>
