<template>
  <div>
    <bento-container :rows="''">
      <bento-card :rows="'1'" :cols="'8'"><span class="p-2 text-white">Bento 1</span></bento-card>
    </bento-container>
  </div>
</template>

<script setup lang="ts">
import BentoContainer from '@/components/bento/BentoContainer.vue'
import BentoCard from '@/components/bento/BentoCard.vue'
</script>
