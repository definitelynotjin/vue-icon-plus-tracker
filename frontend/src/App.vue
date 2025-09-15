<script setup>
  import { useRoute } from 'vue-router'
  import Toaster from '@/components/ui/toast/Toaster.vue'

  const route = useRoute()
</script>
<template>
  <Toaster />
  <v-app>
    <!-- Landing page -->
    <div v-if="route.path === '/'" class="h-full">
      <router-view />
    </div>

    <!-- App layout -->
    <div v-else class="full-height-comp">
      <VueSidebar />
      <Navbar />
      <main>
        <!-- <BreadCrumbs /> -->
        <router-view />
      </main>
    </div>
  </v-app>
</template>
