<template>
  <section
    :class="isToggle ? 'toggle' : ''"
    class="lateral-navbar bg-shark-900 flex flex-col min-h-screen"
  >
    <section class="h-10 flex justify-center items-center text-slate-50">
      <h3>Title or Something</h3>
    </section>
    <list-items></list-items>
    <section :class="isToggle ? 'toggle' : ''" class="footer-nav mt-auto justify-between">
      <div class="mb-2 p-2 item-footer-nav cursor-pointer min-h-fit hover:bg-shark-800 flex">
        <UserIcon stroke="#fff" /><span v-if="!isToggle" class="ml-2 text-slate-50"
          >User settings</span
        >
      </div>
      <div
        @click="handlerToggle"
        class="mb-2 p-2 item-footer-nav cursor-pointer min-h-fit hover:bg-shark-800 flex"
      >
        <ArrowIcon stroke="#fff" />
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import ListItems from './ListItems.vue'
import ArrowIcon from '@/assets/svg/ArrowIcon.vue'
import UserIcon from '@/assets/svg/UserIcon.vue'

import { ref } from 'vue'
import { useLayoutStore } from '@/stores/layout'

const layout = useLayoutStore()

const isToggle = ref(false)

const handlerToggle = () => {
  layout.toggle = !layout.toggle
  isToggle.value = layout.toggle
}
</script>
