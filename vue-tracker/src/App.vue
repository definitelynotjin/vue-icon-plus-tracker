<script lang="ts" setup>
  import { useRoute } from 'vue-router'
  import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
  import Toaster from '@/components/ui/toast/Toaster.vue'
  import AppSidebar from './components/AppSidebar.vue'

  const route = useRoute()
</script>

<template>
  <Toaster />
  <v-app>
    <div v-if="route.path === '/'">
      <router-view />
    </div>

    <div v-else class="d-flex">
      <SidebarProvider>
        <!-- <div class="flex-grow-1"> -->
        <AppSidebar />
        <SidebarTrigger />
        <div classs="flex-grow-1 d-flex flex-row">
          <Navbar />
          <main class="flex-grow-1">
            <router-view />
          </main>
        </div>
        <!-- </div> -->
      </SidebarProvider>
    </div>
  </v-app>
</template>
