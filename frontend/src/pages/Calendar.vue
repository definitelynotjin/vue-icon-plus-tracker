<script setup lang="ts">
  import { shallowRef } from 'vue'
  import { ScheduleXCalendar } from '@schedule-x/vue'
  import {
    createCalendar,
    createViewMonthGrid,
    createViewWeek,
    createViewDay,
  } from '@schedule-x/calendar'
  import '@schedule-x/theme-default/dist/calendar.css'

  const calendarApp = shallowRef(
    createCalendar({
      views: [createViewWeek(), createViewMonthGrid(), createViewDay()],
    }),
  )
</script>

<template>
  <v-app class="calendar-base-wallpaper !bg-gray-900">
    <main>
      <v-container class="calendar-outer-wallpaper">
        <ScheduleXCalendar :calendar-app="calendarApp" />
      </v-container>
    </main>
  </v-app>
</template>

<style lang="css">
  .calendar-outer-wallpaper {
    border-radius: 20px;
    background-color: darkslateblue;
    margin-top: 50px;
  }
</style>
