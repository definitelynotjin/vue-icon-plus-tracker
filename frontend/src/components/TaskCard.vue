<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { taskData } from '../services/api.ts'

  const tasks = ref<any[]>([])

  onMounted(async () => {
    const url = `${import.meta.env.VITE_API_URL}/tasks`
    tasks.value = await taskData(url)
  })
</script>

<template>
  <v-app>
    <v-card
      v-for="task in tasks.filter((t) => String(t.board_column_id) === id)"
      :key="task.id"
      class="task-cards"
      hover
    >
      {{ task.name }}
    </v-card>
  </v-app>
</template>

<style lang="css">
  .v-card.task-cards {
    background-color: red;
    color: green;
  }
</style>
