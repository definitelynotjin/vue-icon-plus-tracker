<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { taskData } from '../services/api.ts'

  const tasks = ref(null)

  const columnIdToString = {
    '1': 'Backlog',
    '2': 'To Do',
    '3': 'In Progress',
    '4': 'Done',
  }

  onMounted(async () => {
    const url = `${import.meta.env.VITE_API_URL}/tasks`
    tasks.value = await taskData(url)
  })
</script>

<template>
  <v-row class="bg-gray-500">
    <v-col v-for="(title, id) in columnIdToString" :key="id" class="column-title" cols="3"
      >{{ title }}
      <TaskCard />
    </v-col>
  </v-row>
</template>

<style lang="css">
  .v-col.column-title {
    font-size: 17px;
    font-weight: bold;
    color: ghostwhite;
  }
</style>
