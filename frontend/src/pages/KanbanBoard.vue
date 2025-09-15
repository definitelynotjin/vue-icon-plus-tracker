<script setup lang="ts"></script>

<template>
  <v-app>
    <main class="board-base-wallpaper bg-gray-900">
      <v-container class="board-outer-wallpaper">
        <TaskColumn />
      </v-container>
    </main>
  </v-app>
</template>

<style lang="css">
  .board-outer-wallpaper {
    width: auto;
    border-radius: 10px;
    background-color: red;
  }
</style>
