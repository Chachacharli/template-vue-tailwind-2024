import { defineStore } from 'pinia'

interface LayoutStore {
  toggle: boolean
}

export const useLayoutStore = defineStore('layout', {
  state: (): LayoutStore => ({
    toggle: false
  }),
  actions: {}
})
