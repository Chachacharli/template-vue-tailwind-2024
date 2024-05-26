<template>
  <lateral-navbar></lateral-navbar>
  <main class="main-content relative">
    <nav class="bg-shark-900 p-2 superior-navbar flex">item</nav>
    <section class="p-2">
      <router-view></router-view>
    </section>
  </main>
</template>

<script setup lang="ts">
import LateralNavbar from '@/components/navbar/LateralNavbar.vue'
import { RouterView } from 'vue-router'
</script>

<style></style>
