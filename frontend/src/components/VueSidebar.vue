<script setup lang="ts">
  import { LayoutDashboard, CalendarFold, SquareKanban } from 'lucide-vue-next'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import Logo from '../assets/logo.png'
  const menuItems = [
    {
      title: 'Dashboard',
      value: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Kanban Board',
      value: '/kanbanboard',
      icon: SquareKanban,
    },
    {
      title: 'Calendar',
      value: '/calendar',
      icon: CalendarFold,
    },
  ]
  const activeMenu = ref('home')
  const router = useRouter()

  function selectMenu(value: any) {
    activeMenu.value = value
    router.push(value)
  }
</script>

<template>
  <v-navigation-drawer class="!bg-gray-800" expand-on-hover permanent rail rail-width="80">
    <v-list>
      <v-list-item class="flex justify-center w-full">
        <v-img :height="50" :src="Logo" :width="50" />
      </v-list-item>
      <v-list>
        <v-divider color="info" :length="50" :thickness="5" />
        <v-list-item
          v-for="item in menuItems"
          :key="item.value"
          active-class="primary--text"
          class="pl-7"
          :prepend-icon="item.icon"
          :title="item.title"
          @click="selectMenu(item.value)"
        />
      </v-list>
    </v-list>
  </v-navigation-drawer>
</template>
