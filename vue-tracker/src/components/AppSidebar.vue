<script setup lang="ts">

  import { Calendar, SquareKanban, LayoutDashboard } from 'lucide-vue-next'
  import { RouterLink } from 'vue-router'
  import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarFooter,
  } from '@/components/ui/sidebar'
  import Logo from '../assets/logo.png'

  const items = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Kanban Board',
      url: '/kanbanboard',
      icon: SquareKanban,
    },
    {
      title: 'Calendar',
      url: '/calendar',
      icon: Calendar,
    },
  ]

</script>

<template>
  <Sidebar collapsible="icon">
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarHeader />
          <v-row class="bg-blue-700">
            <v-img :height="40" :src="Logo" :width="50" />
          </v-row>
          <SidebarFooter>
            <SidebarMenu class="flex flex-col justify-evenly h-full">
              <SidebarMenuItem v-for="item in items" :key="item.title" class="flex-5">
                <SidebarMenuButton as-child>
                  <RouterLink class="flex" :to="item.url">
                    <component :is="item.icon" class="m-8 text-xl text-blue-500" :size="40" />
                    <span>{{ item.title }}</span>
                  </RouterLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
