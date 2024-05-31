<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    :stroke="stroke"
    class="size-4"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
    />
  </svg>
</template>

<script setup lang="ts">
import type { Icon } from '@/types/Icons'

withDefaults(defineProps<Icon>(), {
  stroke: '#FFFF'
})
</script>
