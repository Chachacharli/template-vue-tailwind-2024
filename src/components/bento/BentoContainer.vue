<template>
  <div class="px-2 mx-auto sm:py-4">
    <div class="grid grid-cols-12 gap-4 auto-rows-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface BentoContainer {
  rows?: string
}

withDefaults(defineProps<BentoContainer>(), {
  rows: '1'
})
</script>
