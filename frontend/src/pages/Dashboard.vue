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
    <main class="dashboard-base-wallpaper bg-gray-900">
      <v-container class="dashboard-outer-wallpaper">
        <h1 class="task-title">Task List</h1>
        <v-table
          hover
          comfortable
          class="dashboard-table !bg-gradient-to-r from-gray-800 to-gray-900"
        >
          <thead>
            <tr>
              <th class="table-text">Title</th>
              <th class="table-text">Content</th>
              <th class="table-text">Assignee</th>
              <th class="table-text">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in myTask" :key="task.title">
              <td>{{ task.title }}</td>
              <td class="task-content">{{ task.content }}</td>
              <td>{{ task.assignee }}</td>
              <td>{{ task.due_date }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-container>
    </main>
  </v-app>
</template>

<style>
  h1.task-title {
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: bold;
  }
  td.task-content {
    margin-top: 10px;
    white-space: pre-line;
    line-height: 2.2rem;
  }

  th.table-text {
    text-align: left;
    font-weight: bold;
    font-size: 20px;
    color: grey;
  }
  .dashboard-base-wallpaper {
    height: 100vh;
  }
  .v-table.dashboard-table {
    padding: 20px;
    color: slate;
    border-radius: 20px;
    font-size: 17px;
  }

  .dashboard-outer-wallpaper {
    border-radius: 10px;
    margin-top: 50px;
  }
</style>
