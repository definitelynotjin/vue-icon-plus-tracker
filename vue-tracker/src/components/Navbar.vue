<template>
  <v-app-bar app color="gray-darken-5" dark>
    <!-- Tombol toggle sidebar -->
    <!-- <v-app-bar-nav-icon @click="$emit('toggle-drawer')" />

    <v-spacer></v-spacer> -->

    <div class="d-flex align-center pa-4">
      <span class="text-h6 font-weight-bold">
        <v-img :height="50" :src="Logo" :width="50" />
      </span>
    </div>
    <!-- Tombol Logout Putih -->
    <v-spacer />
    <v-btn :append-inner-icon="LogOutIcon" class="!text-blue-500 !bg-red-500" variant="flat" @click="handleLogout" />
  </v-app-bar>
</template>

<script setup>
  import { LogOutIcon } from 'lucide-vue-next'
  import { useRouter } from 'vue-router'
  import Logo from '../assets/logo.png'

  const router = useRouter()

  function handleLogout () {
    localStorage.removeItem('isLoggedIn')
    router.push('/')
  }
</script>

<style scoped>
.navbar-brand {
  font-weight: bold;
  font-size: 1.25rem;
}

.v-btn {
  transition: all 0.2s;
}

.v-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
}
</style>
