<script setup>
  import { ref, onMounted } from 'vue'
  import { taskData } from '../services/api.ts'

  const myTask = ref(null)

  function formatDate(dueDate) {
    if (!dueDate) return null

    const [d1, m1, y1] = dueDate.from.split('/').map(Number)
    const [d2, m2, y2] = dueDate.to.split('/').map(Number)

    const start = new Date(y1, m1 - 1, d1)
    const end = new Date(y2, m2 - 1, d2)

    const options = { day: '2-digit', month: 'short' }

    if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
      return `${start.getDate()} - ${end.getDate()} ${start.toLocaleDateString('en-GB', { month: 'short' })}`
    }
    return `${start.toLocaleDateString('en-GB', options)} - ${end.toLocaleDateString('en-GB', options)}`
  }

  onMounted(async () => {
    const url = `${import.meta.env.VITE_API_URL}/tasks`
    myTask.value = await taskData(url)
  })
  function priorityColor(priority) {
    if (priority === 'High') {
      return '!text-red-500'
    } else if (priority === 'Medium') {
      return '!text-yellow-300'
    } else {
      return '!text-green-500'
    }
  }
</script>

<template>
  <v-app>
    <main class="dashboard-base-wallpaper bg-gray-900">
      <v-container class="dashboard-outer-wallpaper">
        <h1 class="task-title">Task List</h1>
        <v-table hover comfortable class="dashboard-table !bg-gray-800">
          <thead>
            <tr>
              <th class="table-title-text">Title</th>
              <th class="table-title-text">Priority</th>
              <th class="table-title-text">Content</th>
              <th class="table-title-text">Assignee</th>
              <th class="table-title-text">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in myTask" :key="task.title">
              <td>{{ task.title }}</td>
              <td :class="priorityColor(task.priority)">{{ task.priority }}</td>
              <td class="task-content">{{ task.content }}</td>
              <td>{{ task.assignee }}</td>
              <td>{{ formatDate(task.due_date) }}</td>
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
  th.table-title-text {
    text-align: justify;
    font-weight: bold;
    font-size: 20px;
    color: ghostwhite;
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
  }
</style>
