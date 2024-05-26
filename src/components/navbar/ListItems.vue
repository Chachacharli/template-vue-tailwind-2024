<template>
  <div class="flex flex-col">
    <div v-for="route in routes" :key="route.name">
      <router-link
        v-if="route.meta.navbar"
        :to="{ name: route.name }"
        :class="isCurrent(route.name) ? 'bg-dshark-800 active' : ''"
        class="item-navbar w-[100%] pl-2 h-[50px] bg-shark-900 cursor-pointer flex items-center hover:bg-shark-800"
      >
        <span class="text-zinc-100">{{ $t(route.name) }}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routes } from '@/router/routes'
import { useRoute } from 'vue-router'

const route = useRoute()

const isCurrent = (name: string) => {
  return route.name === name
}
</script>

<style>
.item-navbar.active {
  border-left: solid #31559c;
}
</style>
