<template>
  <div
    :class="[
      `col-span-12`,
      `row-span-${rows}`,
      `md:col-span-${cols}`,
      'rounded',
      'bg-shark-900',
      'h-full',
      'flex',
      'flex-col'
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface BentoCard {
  cols?: string
  rows?: string
  rounded?: boolean
  background?: boolean
  classes?: string[]
}

withDefaults(defineProps<BentoCard>(), {
  cols: '1',
  rows: '1',
  rounded: false,
  background: true
})
</script>
