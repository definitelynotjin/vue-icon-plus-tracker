<script setup lang="ts">
  const items = [
    {
      title: 'Home',
      disabled: false,
      href: 'breadcrumbs_dashboard',
    },

    {
      title: 'Kanban Board',
      disabled: false,
      href: 'breadcrumbs_kanbanboard',
    },

    {
      title: 'Calendar',
      disabled: false,
      href: 'breadcrumbs_calendar',
    },
  ]
</script>

<template>
  <v-breadcrumbs class="breadcrumbs" :items="items">
    <template v-slot:prepend> </template>
  </v-breadcrumbs>
</template>

<style lang="css">
  .v-breadcrumbs.breadcrumbs {
    color: red;
    background-color: green;
  }
</style>
