import { defineStore } from 'pinia'
import api from '../services/api.ts'

export const useDashboardStore = defineStore('tasks',{
  state: () =>({
    tasks: [],
  }),
  getters: {

  }
})
