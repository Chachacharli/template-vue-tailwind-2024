<template>
  <lateral-navbar></lateral-navbar>
  <main class="main-content relative">
    <nav class="bg-shark-900 p-2 superior-navbar flex">
      <button @click="handlerToggle" class="hover:bg-shark-800 flex p-2"><MenuIcon /></button>
    </nav>
    <section class="p-2">
      <router-view></router-view>
    </section>
  </main>
</template>

<script setup lang="ts">
import LateralNavbar from '@/components/navbar/LateralNavbar.vue'
import { RouterView } from 'vue-router'
import MenuIcon from '@/assets/svg/MenuIcon.vue'
import { useLayoutStore } from '@/stores/layout'

const layout = useLayoutStore()

const handlerToggle = () => {
  layout.toggle = !layout.toggle
}
</script>

<style></style>
