<template>
  <div class="text-slate-50">
    <HoverCardRadix>
      <template #trigger>
        <img
          class="block h-[60px] w-[60px] rounded-full"
          src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
          alt="Radix UI"
        />
      </template>
      <template #content>
        <div>
          <h3>Mamahuevo</h3>
        </div>
      </template>
    </HoverCardRadix>
  </div>
</template>

<script setup lang="ts">
import HoverCardRadix from '@/components/cards/HoverCardRadix.vue'
</script>
