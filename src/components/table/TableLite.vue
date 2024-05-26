<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-slate-50 border-collapse">
      <thead class="text-xs text-slate-50 uppercase">
        <tr>
          <th scope="col" class="px-6 py-3">Product name</th>
          <th scope="col" class="px-6 py-3">Color</th>
          <th scope="col" class="px-6 py-3">Category</th>
          <th scope="col" class="px-6 py-3">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="_ in 10"
          :key="_"
          class="hover:bg-shark-800 cursor-pointer border-b border-white"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-slate-50 whitespace-nowrap dark:text-white"
          >
            Apple MacBook Pro 17"
          </th>
          <td class="px-6 py-4">Silver</td>
          <td class="px-6 py-4">Laptop</td>
          <td class="px-6 py-4">$2999</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.border-collapse tr {
  border-bottom: 1px solid rgba(125, 151, 179, 0.3);
}
</style>
