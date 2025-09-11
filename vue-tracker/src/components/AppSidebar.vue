<script setup lang="ts">
  import { Calendar, SquareKanban, LayoutDashboard } from 'lucide-vue-next'
  import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
  } from '@/components/ui/sidebar'
  const items = [
    {
      title: 'Dashboard',
      url: '/Dashboard',
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
  <Sidebar collapsible="icon" side="left">
    <SidebarHeader />
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton as-child>
                <a :href="item.url">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
