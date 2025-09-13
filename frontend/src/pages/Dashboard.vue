<script setup>
  import { ref, computed } from 'vue'

  const tasks = ref([
    {
      title: 'Setup project',
      content: 'Initialize Vue + Vuetify project',
      assignee: 'Alice',
      dueDate: { from: '2025-09-21', to: '2025-09-22' },
    },
    {
      title: 'Design login page',
      content: 'Create responsive login UI',
      assignee: 'Bob',
      dueDate: { from: '2025-09-23', to: '2025-09-25' },
    },
    {
      title: 'Implement authentication',
      content: 'Add JWT login & register',
      assignee: 'Charlie',
      dueDate: { from: '2025-09-22', to: '2025-09-24' },
    },
    {
      title: 'Build dashboard',
      content: 'Add charts and stats overview',
      assignee: 'Diana',
      dueDate: { from: '2025-09-21', to: '2025-09-25' },
    },
    {
      title: 'Deploy app',
      content: 'Setup CI/CD with Vercel',
      assignee: 'Eve',
      dueDate: { from: '2025-09-22', to: '2025-09-24' },
    },
  ])
</script>

<template>
  <v-app>
    <main class="dashboard-base-wallpaper">
      <v-container class="dashboard-outer-wallpaper">
        <h1>Task List</h1>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Title</th>
              <th class="text-left">Content</th>
              <th class="text-left">Assignee</th>
              <th class="text-left">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in tasks" :key="task.title">
              <td>{{ task.title }}</td>
              <td>{{ task.content }}</td>
              <td>{{ task.assignee }}</td>
              <td>{{ task.dueDate }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-container>
    </main>
  </v-app>
</template>

<style>
  .dashboard-base-wallpaper {
    height: 100vh;
    background-color: green;
  }

  .dashboard-outer-wallpaper {
    background-color: gray;
    margin-top: 50px;
  }
</style>
