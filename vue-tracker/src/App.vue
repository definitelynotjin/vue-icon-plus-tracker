<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { Toaster, toast } from 'vue-sonner'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
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
        <AppSidebar />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
      <router-view />
      <HeaderBar />
    </div>
  </v-app>
</template>
