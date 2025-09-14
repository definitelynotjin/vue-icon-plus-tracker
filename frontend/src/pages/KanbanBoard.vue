<script setup>
  import { ref, onMounted } from 'vue'
  import { taskData } from '../services/api.ts'

  const myTask = ref(null)

  onMounted(async () => {
    const url = `${import.meta.env.VITE_API_URL}/tasks`
    // const formattedDate = ref()
    myTask.value = await taskData(url)
  })
</script>

<template>
  <v-app>
    <main class="board-base-wallpaper bg-gray-900">
      <v-container class="board-outer-wallpaper"> </v-container>
    </main>
  </v-app>
</template>

<style>
  .board-base-wallpaper {
    height: 100vh;
  }
  .v-table.dashboard-table {
    color: slate;
    border-radius: 20px;
    font-size: 17px;
  }

  .board-outer-wallpaper {
    border-radius: 10px;
    background-color: red;
    margin-top: 50px;
  }
</style>
